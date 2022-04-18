import { Button } from "@apivideo/core";
import { Button as UploadButton } from "@apivideo/upload-button"
import { useIsomorphicLayoutEffect } from "@apivideo/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("apivideo docs page");
  }, []);
  return (
    <div>
      <h1>apivideo Documentation</h1>
      <Button>Click me</Button>
      <UploadButton />
    </div>
  );
}
