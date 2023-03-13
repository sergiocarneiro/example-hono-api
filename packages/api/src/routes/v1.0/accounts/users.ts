import { Hono } from "hono";

const users = new Hono()
  .get("/", (c) => c.jsonT({ message: "GET Users" }))
  // .get("/index", (c) => c.jsonT({ message: "GET Users" })) // ! You need this route to work with hono 3.0
  .post("/", (c) => c.jsonT({ message: "POST Users" }))

export default users;
