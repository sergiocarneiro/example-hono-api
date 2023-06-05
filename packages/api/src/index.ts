import { Hono } from 'hono'
import { v1_0 } from "./routes";

const app = new Hono()
  .route("/v1.0", v1_0);

export default app;
