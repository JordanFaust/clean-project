import "../src"
import { LDContext } from "@launchdarkly/cloudflare-server-sdk"

test("can use jsonwebtoken in tests", () => {
  console.log(typeof LDContext)
  expect("foo").toBe("foo");
});
