import { Button } from "@apivideo/core";
import { Button as UploadButton } from "@api.video/upload-button"
import { useIsomorphicLayoutEffect } from "@apivideo/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("apivideo docs page");
  }, []);
  return (
    <div>
      <h1>apivideo Documentation</h1>
      <Button>Click me</Button>
      <UploadButton apiKey="Ia8SciREqEq01syrKgeYXCm7L5jNUetFAfiGv67rnWJ" />
      <UploadButton apiKey="A7NJzkGiud10kB3zv8WJSIvsmoIyplNWVwuKC0b51UP" />
    </div>
  );
}
