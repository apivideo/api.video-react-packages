import * as React from "react";
import { VideoUploader } from '@api.video/video-uploader'

export interface ButtonProps {
  children?: React.ReactNode
  apiKey: string
}

export function Button({ 
  children,
  apiKey 
}: ButtonProps) {
  const [progress, setProgress] = React.useState<number>(0)
  const [uploadToken, setUploadToken] = React.useState<{ token: string, ttl: number } | undefined>(undefined)

  const inputRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    const getUploadToken = async (): Promise<void> => {
      const { access_token }: { access_token: string } = await fetch(
        'https://ws.api.video/auth/api-key', 
        {
          method: 'POST',
          body: JSON.stringify({
            apiKey
          }),
        })
        .then(res => res.json())

      const { data }: { data: Array<{ token: string, ttl: number }> } = await fetch(
        'https://ws.api.video/upload-tokens', 
        {
          method: 'GET',
          headers: {
              Authorization: access_token
          }
        })
        .then(res => res.json())
      
      if (data && data.length > 0) {
        setUploadToken({ token: data[0].token, ttl: data[0].ttl })
        return
      }

      const { token, ttl }: { token: string, ttl: number } = await fetch(
        'https://ws.api.video/upload-tokens', 
        {
          method: 'POST',
          headers: {
              Authorization: access_token
          }
        })
        .then(res => res.json())
      
      setUploadToken({ token, ttl })
    }
    getUploadToken()
  }, [apiKey])

  console.log(uploadToken)

  const handleClick = (): void => inputRef.current?.click()
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!e.currentTarget?.files || !uploadToken) return
    const videoUploader = new VideoUploader({
      uploadToken: uploadToken.token,
      file: e.currentTarget.files[0]
    })
    videoUploader.onProgress(e => setProgress(Math.round(e.uploadedBytes*100/e.totalBytes)))
    videoUploader.upload()
  }

  console.log(progress)
  return (
    <>
      <button onClick={handleClick}>{children ?? "Upload Button"}</button>
      <input type="file" hidden ref={inputRef} onChange={handleUpload} />
    </>
  )
}

Button.displayName = "Upload button"
