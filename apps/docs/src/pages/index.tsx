import { Button as UploadButton } from "@api.video/upload-button"
import { useIsomorphicLayoutEffect } from "@apivideo/utils";
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
          <UploadButton apiKey="Ia8SciREqEq01syrKgeYXCm7L5jNUetFAfiGv67rnWJ" />
        </S.PackageContainer>
      </S.DisplayContainer>
    </S.GlobalContainer>
  );
}
