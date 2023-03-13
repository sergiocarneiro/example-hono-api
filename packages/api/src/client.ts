import { hc } from "hono/client";
import app from ".";

const host = "http://localhost:8787";
// const host = "https://api.example.com";

export const RPC = hc<typeof app>(host);
