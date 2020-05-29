import childProcess from 'child_process';
import fs from 'fs';
import { promisify } from 'util';
import { dirname } from 'path'
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import memoize from 'lodash/memoize.js';
import * as dataProviders from './dataProviders/index.mjs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const exec = promisify(childProcess.exec);
const CONTENT_PATH = `${__dirname}/../src/content`;
const WEBSITE = process.env.SITEMAP_WEBSITE || 'http://localhost:3000';

function urlEntry(value) {
  return `
    <url>
      <loc>${WEBSITE}${value.path}</loc>
      <lastmod>${value.lastmod}</lastmod>
      <changefreq>${value.changefreq}</changefreq>
      <priority>${value.priority}</priority>
    </url>
  `;
}

const getLastModified = memoize(async (path) => {
  const { stdout, stderr } = await exec(`git log -1  --format="%aI" ${CONTENT_PATH}/${path}`);

  if (stderr) {
    throw new Error(stderr);
  }

  return new Date(stdout.trim());
});

async function parseLastMod(value) {
  if (!Array.isArray(value)) {
    return value;
  }

  const dates = await Promise.all(value.map(getLastModified));
  const lastModified = new Date(Math.max(...dates));

  return [
    lastModified.getFullYear(),
    String(lastModified.getMonth() + 1).padStart(2, '0'),
    String(lastModified.getDate()).padStart(2, '0'),
  ].join('-');
}

async function urlEntriesFrom(route, getItems) {
  const details = {
    path: Array.isArray(route.path) ? route.path[0] : route.path,
    changefreq: route.sitemap.changefreq,
    priority: route.sitemap.priority,
  };

  if (!getItems) {
    return [urlEntry({
      ...details,
      lastmod: await parseLastMod(route.sitemap.lastmod),
    })];
  }

  const items = await getItems({ contentPath: CONTENT_PATH });
  const regexp = /:[\w_]+\??/g
  const parseItems = items.map(async ({ doc, lastmod }) => urlEntry({
    ...details,
    path: route.path.replace(regexp, (value) => {
      const prop = value.endsWith('?') ? value.slice(1, -1) : value.slice(1);
      return doc[prop];
    }),
    lastmod: await parseLastMod(lastmod)
  }));

  return Promise.all(parseItems);
}

async function generate() {
  const { routes } = yaml.load(fs.readFileSync(`${__dirname}/../src/config/routes.yml`));
  const urls = []
  const parseRoutes = routes.map(async (route) => {
    const hasPlaceholders = route.path.includes(':');

    if (hasPlaceholders && !route.provider) {
      throw new Error(`Cannot generate sitemap.xml. Please specify placeholder "provider" property for ${route.path}.`)
    }

    if (hasPlaceholders && !dataProviders[route.provider]) {
      throw new Error(`Unknown data provider "${route.provider}"`);
    }

    const entries = hasPlaceholders
      ? await urlEntriesFrom(route, dataProviders[route.provider])
      : await urlEntriesFrom(route);

    urls.push(...entries);
  }, []);

  await Promise.all(parseRoutes);
  const content = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urls.join('\n')}
    </urlset>
  `.trim();

  fs.writeFileSync(`${__dirname}/../public/sitemap.xml`, content);
}

generate()
  .then(() => console.log('sitemap has been successfully generated'))
  .catch((error) => console.error(error))
