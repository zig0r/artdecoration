import React from 'react';
import { Redirect, useLocation } from 'react-router-dom';
import { createHookForList } from './hooks';
import memoize from 'lodash/memoize';
import { indexTree } from './utils.mjs';

export const fetchCategories = memoize(async (lang) => {
  const module = await import(`../content/categories.${lang}.yml`);

  return {
    categories: module.categories,
    byName: indexTree(module.categories),
  };
});

export const useCategories = createHookForList(fetchCategories);

export function useCategory(lang, id) {
  const { byName } = useCategories(lang);

  return byName ? byName[id] : null;
}

export function useCategoriesRedirect(categories, params) {
  const location = useLocation();

  if (!params.id && categories) {
    return <Redirect to={`${location.pathname}/${categories[0].children[0].id}`} />
  }

  if (params.id && params.id.startsWith('show-')) {
    const categoryId = params.id.replace(/^show-\d+-/, '');
    return <Redirect to={location.pathname.replace(params.id, categoryId)} />
  }

  return null;
}
