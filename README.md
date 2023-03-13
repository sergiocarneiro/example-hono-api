# example-hono-api

An example of how to create a publishable and fully type-safe API using [Hono](https://hono.dev).

A [RPC client](https://hono.dev/guides/rpc) is exposed and can be published as a package to be consumed by other applications.

## What's inside?

### Projects

- `api` – a [Cloudflare Worker](https://workers.cloudflare.com) that exposes a [RPC client](https://hono.dev/guides/rpc)
- `app` – a [Remix](https://remix.run/) app that consumes the API

### Tech Stack

- [Hono](https://hono.dev)
- [Cloudflare Workers](https://workers.cloudflare.com)
- [Remix](https://remix.run)
- [Turborepo](https://turbo.build/repo)
- [pnpm](https://pnpm.io)

## Setup

```sh
pnpm install -r
```

## Usage

Run commands project-wide with `pnpm run <command>`.

### Commands

- `dev` – start the development servers
- `build` – build the production bundles
- `lint` – lint the codebase
- `test` – run the tests

### Dev

#### 1. Start the development servers
```sh
pnpm run dev
```

You should see an output containing:

```sh
api:dev: ⬣ Listening at http://0.0.0.0:8787
```
```sh
app:dev: Remix App Server started at http://localhost:3000
```

#### 2. Open the app
Find the `app` URL in the output and open it in your browser.
