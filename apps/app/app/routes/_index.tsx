import { useCatch, useLoaderData } from "@remix-run/react";
import { RPC } from "api";

export async function loader() {
  const res = await RPC["v1.0"].accounts.users.index.$get();

  if (!res.ok) {
    throw res;
  }

  return res.json();
}

export default function Component() {
  const data = useLoaderData();

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "1.5rem" }}>
      <h1>example-hono-api — Remix 💿</h1>
      <hr />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}

export function CatchBoundary() {
  const { data, status, statusText } = useCatch();

  console.error(data);

  return (
    <main style={{ fontFamily: "system-ui, sans-serif", padding: "1.5rem" }}>
      <h1 style={{ color: "red" }}>
        {`${status} ${statusText}`}
      </h1>
    </main>
  );
}
