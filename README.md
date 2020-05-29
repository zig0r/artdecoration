# http://artdecoration.com.ua

## Requirements

Node.js 12.x

## Installation

```sh
git clone
cd artdecoration
npm ci

npm start # to run the app locally in dev mode
```

## Build

To build a production version run

```sh
npm run build
```

To build sitemap.xml, run

```sh
npm run build.sitemap # saves sitemap.xml to "build" folder, so run it after npm run build
```

To pre-render all pages from sitemap.xml run

```sh
npm run build.pages
```

It uses puppeteer to render built content, make sure to run this after `npm run build`, so your users will get the latest version.

## Search

This app uses [minisearch] library to search over categories. This library allows to do full text search on client side without backend.

[minisearch]: https://lucaong.github.io/minisearch/

## Content

TODO
