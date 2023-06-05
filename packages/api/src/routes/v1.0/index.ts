import { Hono } from "hono";
import accounts from "./accounts";

const v1_0 = new Hono()
  .route("/accounts", accounts)

export default v1_0;
