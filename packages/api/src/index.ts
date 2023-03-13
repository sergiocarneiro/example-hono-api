import { Hono } from 'hono'
import { v1_0 } from "./routes";
import users from "./routes/v1.0/accounts/users";

const app = new Hono()
  // .route("/v1.0", v1_0) // ! Currently failing. Waiting for Hono update
  .route("/v1.0/accounts/users", users) // ! temp fix

export default app;
