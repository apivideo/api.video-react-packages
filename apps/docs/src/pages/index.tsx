import { Button } from "@api.video/core";
import { useIsomorphicLayoutEffect } from "@api.video/utils";

export default function Docs() {
  useIsomorphicLayoutEffect(() => {
    console.log("api.video docs page");
  }, []);
  return (
    <div>
      <h1>api.video Documentation</h1>
      <Button>Click me</Button>
    </div>
  );
}
