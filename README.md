# NextJS and React Query issue

## How I created this project

```bash
npx create-next-app@latest
pnpm add @tanstack/react-query
pnpm add ky
```

Then I coded

## The issue

After running :

```bash
pnpm build
```

I get this error :

```
> repro-next14-react-query@0.1.0 build /home/mihai/dump/repro-next14-react-query/repro-next14-react-query
> next build

  ▲ Next.js 14.2.5

   Creating an optimized production build ...
 ✓ Compiled successfully
 ✓ Linting and checking validity of types
 ✓ Collecting page data
   Generating static pages (1/8)  [=   ]Error: No QueryClient set, use QueryClientProvider to set one
    at useQueryClient (file:///home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/@tanstack+react-query@5.51.23_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js:15:11)
    at useBaseQuery (file:///home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/@tanstack+react-query@5.51.23_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js:27:18)
    at useQuery (file:///home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/@tanstack+react-query@5.51.23_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js:7:10)
    at i (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/.next/server/pages/feature/login-feature.js:1:2247)
    at i (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/.next/server/pages/feature/login-feature.js:1:2478)
    at Wc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:44)
    at Zc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:253)
    at Z (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Xc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:409)
    at Zc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:210)

Error occurred prerendering page "/feature/login-feature". Read more: https://nextjs.org/docs/messages/prerender-error

Error: No QueryClient set, use QueryClientProvider to set one
    at useQueryClient (file:///home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/@tanstack+react-query@5.51.23_react@18.3.1/node_modules/@tanstack/react-query/build/modern/QueryClientProvider.js:15:11)
    at useBaseQuery (file:///home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/@tanstack+react-query@5.51.23_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useBaseQuery.js:27:18)
    at useQuery (file:///home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/@tanstack+react-query@5.51.23_react@18.3.1/node_modules/@tanstack/react-query/build/modern/useQuery.js:7:10)
    at i (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/.next/server/pages/feature/login-feature.js:1:2247)
    at i (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/.next/server/pages/feature/login-feature.js:1:2478)
    at Wc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:44)
    at Zc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:253)
    at Z (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:76:89)
    at Xc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:68:409)
    at Zc (/home/mihai/dump/repro-next14-react-query/repro-next14-react-query/node_modules/.pnpm/react-dom@18.3.1_react@18.3.1/node_modules/react-dom/cjs/react-dom-server.browser.production.min.js:70:210)
 ✓ Generating static pages (8/8)

> Export encountered errors on following paths:
	/feature/login-feature
 ELIFECYCLE  Command failed with exit code 1.
```
