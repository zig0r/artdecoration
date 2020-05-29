import parser from 'xyaml-webpack-loader/parser.js';
import fs from 'fs';
import { promisify } from 'util';
import { indexTree } from '../../src/services/utils.mjs';

const readFile = promisify(fs.readFile);

export default async ({ contentPath }) => {
  const content = await readFile(`${contentPath}/categories.uk.yml`, 'utf8');
  const { categories } = parser.parse(content);

  return Object.values(indexTree(categories))
    .reduce((categories, category) => {
      if (!category.description && category.children) {
        return categories;
      }

      return categories.concat({
        doc: category,
        lastmod: [`categories/${category.id}.uk.md`]
      });
    }, []);
};
