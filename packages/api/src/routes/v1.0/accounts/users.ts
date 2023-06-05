import { Hono } from "hono";

const users = new Hono()
  .get("/", (c) => c.jsonT({ message: "GET Users" }))
  .post("/", (c) => c.jsonT({ message: "POST Users" }))

export default users;
