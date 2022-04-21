import * as React from "react";
import { VideoUploader } from '@api.video/video-uploader'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  uploadToken: string
  style?: React.CSSProperties
  disabledOnUpload?: boolean
  withError?: boolean
  errorMessage?: string
}

export function Button({
  children,
  uploadToken,
  style,
  disabledOnUpload,
  withError,
  errorMessage,
  ...props 
}: ButtonProps) {
  // LOCAL STATE
  const [isDisabled, setIsDisabled] = React.useState<boolean | undefined>(false)
  const [uploading, setUploading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<{ error: boolean, message: string }>(
    { error: false, message: '' }
  )

  // CONSTANTS
  const inputRef = React.useRef<HTMLInputElement>(null)

  // COMPONENT LIFECYCLES
  React.useEffect(() => {
    setIsDisabled(props.disabled || (disabledOnUpload && uploading))
  }, [props.disabled, disabledOnUpload, uploading])

  // HANDLERS - METHODS
  const handleClick = (): void => inputRef.current?.click()
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.currentTarget?.files || !e.currentTarget.files[0] || !uploadToken) return
    setUploading(true)
    setError({ error: false, message: '' })
    try {
      const file = e.currentTarget.files[0]
      const videoUploader = new VideoUploader({
        uploadToken: uploadToken,
        file
      })
      await videoUploader.upload()
    } catch (error) {
      setError({ error: true, message: 'An error occured during your upload' })
    } finally {
      setUploading(false)
      // Enable the input to upload same file again
      inputRef.current!.value = ''
    }
  }

  // RETURN
  return (
    <>
      <button 
        {...props}
        onClick={handleClick}
        style={{
          background: '#FFFFFF',
          border: `1px solid ${withError && error.error ? '#FF0000' : '#000000'}`,
          borderRadius: 3,
          padding: '5px 10px',
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          color: `${withError && error.error ? '#FF0000' : 'unset'}`,
          ...style,
        }}
        disabled={isDisabled}
      >
        {children}
      </button>
      {withError && error.error && (
        <div
          style={{
            fontSize: '.7rem',
            marginTop: '5px',
            color: '#FF0000',
          }}
        >
          {errorMessage ?? error.message}
        </div>
      )}
      <input type="file" hidden ref={inputRef} onChange={handleUpload} />
    </>
  )
}

Button.displayName = "Upload button"
