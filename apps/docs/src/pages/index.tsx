import { UploadButton } from "@api.video/upload-button"
import * as S from '../styles'

export default function Docs() {
  return (
    <S.GlobalContainer>
      <h1>api.video React library ⚛️</h1>
      <S.DisplayContainer>
        <S.PackageContainer>
          <h3>{UploadButton.displayName}</h3>
          <UploadButton uploadToken="YOUR_UPLOAD_TOKEN">
            Upload Button
          </UploadButton>
        </S.PackageContainer>
      </S.DisplayContainer>
    </S.GlobalContainer>
  );
}
