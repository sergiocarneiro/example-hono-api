# Remix App

A [Remix](https://remix.run/) app that consumes the API.


## Perks

### Enable end-to-end live reloading

```js
// remix.config.js
{
  watchPaths: ["../../packages/api"]
}
```

### Throw failing requests

And handle them in isolation in the `CatchBoundary`

```tsx
export async function loader() {
  const res = await RPC.example.$get();

  if (!res.ok) {
    throw res; // 🦄
  }

  return res.json();
}

export function CatchBoundary() {
  const { data, status, statusText } = useCatch();

  console.error(data);

  return (
    <h1>{`${status} ${statusText}`}</h1>
  );
}

```

