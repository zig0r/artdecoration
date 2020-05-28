import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';
import memoize from 'lodash/memoize';

function createHookForList(runEffect) {
  return (locale) => {
    const [items, setItems] = useState({});
    useEffect(() => {
      runEffect(locale).then(setItems);
    }, [locale]);

    return items;
  };
}

function indexifyCategories(categories, parent = null) {
  const byName = {};

  categories.forEach((category) => {
    byName[category.name] = category;
    category.parent = parent;

    if (category.children) {
      const children = indexifyCategories(category.children, category);
      Object.assign(byName, children);
    }
  });

  return byName;
}

export const useCategories = createHookForList(memoize(async (lang) => {
  const module = await import(`../content/categories.${lang}.yml`);

  return {
    categories: module.categories,
    byName: indexifyCategories(module.categories),
  };
}));
export const useQuotes = createHookForList(memoize(lang => import(`../content/quotes.${lang}.yml`)))

export function useCategory(id) {
  const intl = useIntl();
  const { byName } = useCategories(intl.locale);

  return byName ? byName[id] : null;
}