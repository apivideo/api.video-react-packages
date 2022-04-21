import { Button as UploadButton } from "@api.video/upload-button"
import { List } from "@api.video/contents-list"
import { useIsomorphicLayoutEffect } from "@api.video/utils"
import * as S from '../styles'

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("apivideo docs page");
  }, []);
  return (
    <S.GlobalContainer>
      <h1>api.video React library ⚛️</h1>
      <S.DisplayContainer>
        <S.PackageContainer>
          <h3>{UploadButton.displayName}</h3>
          <UploadButton uploadToken="to6l43T5QSnYZPS0dpCjPp3U" withError disabledOnUpload>
            Upload Button
          </UploadButton>
        </S.PackageContainer>
        <S.PackageContainer>
          <h3>{List.displayName}</h3>
          <List />
        </S.PackageContainer>
      </S.DisplayContainer>
    </S.GlobalContainer>
  );
}
