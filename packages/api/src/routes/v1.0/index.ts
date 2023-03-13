import { Hono } from "hono";
import accounts from "./accounts";

const v1_0 = new Hono()
  // @ts-expect-error - Waiting for Hono update
  .route("/accounts", accounts)

export default v1_0;
