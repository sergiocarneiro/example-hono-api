import { Hono } from "hono";
import users from "./users";

const accounts = new Hono()
  .route("/users", users);

export default accounts;
