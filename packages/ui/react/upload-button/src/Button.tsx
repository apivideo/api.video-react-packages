import * as React from "react";
import { VideoUploader } from '@api.video/video-uploader'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode
  apiKey: string
  style?: React.CSSProperties
  disabledOnUpload?: boolean
  withAccessToken?: boolean
}

export function Button({
  children,
  apiKey,
  style,
  disabledOnUpload,
  withAccessToken,
  ...props 
}: ButtonProps) {
  // LOCAL STATE
  const [progress, setProgress] = React.useState<number>(0)
  const [uploadToken, setUploadToken] = React.useState<string | undefined>(undefined)
  const [isDisabled, setIsDisabled] = React.useState<boolean | undefined>(false)

  // CONSTANTS
  const inputRef = React.useRef<HTMLInputElement>(null)

  // COMPONENT LIFECYCLES
  React.useEffect(() => {
    const getUploadToken = async (): Promise<void> => {
      // Get the access token
      const { access_token }: { access_token: string } = await fetch(
        'https://ws.api.video/auth/api-key', 
        {
          method: 'POST',
          body: JSON.stringify({
            apiKey
          }),
        })
        .then(res => res.json())

      // Use the access token to upload
      if (withAccessToken) {
        setUploadToken(access_token)
        return
      }

      // Get the list of upload tokens
      const { data }: { data: Array<{ token: string }> } = await fetch(
        'https://ws.api.video/upload-tokens',
        {
          method: 'GET',
          headers: {
              Authorization: access_token
          }
        })
        .then(res => res.json())
      
      // There's already a usable upload token
      if (data && data.length > 0) {
        setUploadToken(data[0].token)
        return
      }

      // Create an upload token
      const { token }: { token: string } = await fetch(
        'https://ws.api.video/upload-tokens', 
        {
          method: 'POST',
          headers: {
              Authorization: access_token
          },
        })
        .then(res => res.json())
      
      setUploadToken(token)
    }
    getUploadToken()
  }, [apiKey, withAccessToken])
  React.useEffect(() => {
    setIsDisabled(props.disabled || (disabledOnUpload && progress > 0 && progress < 100 ))
  }, [props.disabled, disabledOnUpload, progress])

  // HANDLERS - METHODS
  const handleClick = (): void => inputRef.current?.click()
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.currentTarget?.files || !e.currentTarget.files[0] || !uploadToken) return
    const file = e.currentTarget.files[0]
    let videoId = undefined
    if (withAccessToken) {
      const videoOjb: { videoId: string } = await fetch(
        'https://ws.api.video/videos',
        {
          method: 'POST',
          headers: {
            Authorization: uploadToken
          },
          body: JSON.stringify({
            title: 'New video'
          }),
        })
        .then(res => res.json())
      videoId = videoOjb.videoId
    }

    const options = withAccessToken && videoId
      ? { accessToken: uploadToken, file, videoId }
      : { uploadToken: uploadToken, file }
    const videoUploader = new VideoUploader(options)
    videoUploader.onProgress(e => setProgress(Math.round(e.uploadedBytes*100/e.totalBytes)))
    videoUploader.upload()
    // Enable the input to upload same file again
    inputRef.current!.value = ''
  }

  // RETURN
  return (
    <>
      <button 
        {...props}
        onClick={handleClick}
        style={{
          ...style,
          background: '#FFFFFF',
          border: '1px solid #000000',
          borderRadius: 3,
          padding: '5px 10px',
          cursor: isDisabled ? 'not-allowed' : 'pointer'
        }}
        disabled={isDisabled}
      >
        {children ?? "Upload Button"}
      </button>
      <input type="file" hidden ref={inputRef} onChange={handleUpload} />
    </>
  )
}

Button.displayName = "Upload button"
