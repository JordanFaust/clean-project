import * as jwt from "jsonwebtoken";

test("can use jsonwebtoken in tests", () => {
  expect(jwt.sign("payload", "private key")).toMatch(/^ey.*$/);
});
