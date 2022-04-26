import * as React from "react";
import { VideoUploader } from '@api.video/video-uploader'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  uploadToken: string
  style?: React.CSSProperties
  onUpload?: () => void
  onError?: () => void
  onSuccess?: () => void
}

export function Button({
  children,
  uploadToken,
  style,
  onError,
  onUpload,
  onSuccess,
  ...props 
}: ButtonProps) {
  // CONSTANTS
  const inputRef = React.useRef<HTMLInputElement>(null)

  // HANDLERS - METHODS
  const handleClick = (): void => inputRef.current?.click()
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (!e.currentTarget?.files || !e.currentTarget.files[0] || !uploadToken) return
    onUpload && onUpload()
    try {
      const file = e.currentTarget.files[0]
      const videoUploader = new VideoUploader({
        uploadToken: uploadToken,
        file
      })
      await videoUploader.upload()
      onSuccess && onSuccess()
    } catch (error: any) {
      onError && onError()
    } finally {
      // Enable the input to upload same file again
      inputRef.current!.value = ''
    }
  }

  // RETURN
  return (
    <>
      <button 
        { ...props }
        onClick={handleClick}
        style={{
          background: '#FFFFFF',
          border: '1px solid #000000',
          borderRadius: 3,
          padding: '5px 10px',
          cursor: 'pointer',
          ...style,
        }}
      >
        {children}
      </button>
      <input type="file" hidden ref={inputRef} onChange={handleUpload} />
    </>
  )
}

Button.displayName = "Upload button"
