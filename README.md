# vite-plugin-supported-browserslist

This is a small Vite plugin that permits the use of `.browserslistrc` file  (or any other configuration method) to generate a list of supported browsers to be checked at runtime.

The intention is that the plugin can be used to show a custom message/banner to users using browsers you consider undesirable or unsupported.

This package uses [browserslist-useragent-regexp](https://github.com/browserslist/browserslist-useragent-regexp) internally and all of its options are supported.

## Setup

Install this package alongside the latest version of browserslist:

```
npm i browserslist -D
npm i vite-plugin-supported-browserslist
```

In your `vite.config.ts|js` install the plugin:
```ts
import supportedBrowser from 'vite-plugin-supported-browserslist'

export default defineConfig({
  plugins: [
    // All the same options from browserslist-useragent-regexp are available here
    supportedBrowser({ allowHigherVersions: true }),
  ],
})
```

You can configure the browserslist as part of the plugin options or use a traditional `.browserslistrc`.

To check the current browser at runtime, import `isSupportedBrowser` from `vite-plugin-supported-browserslist/web`:

```ts
import { isSupportedBrowser } from 'vite-plugin-supported-browserslist/web';

const isSupported = isSupportedBrowser();
```
