import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

function createHookForList(runEffect, transform) {
  return (locale) => {
    const [items, setItems] = useState({});
    useEffect(() => {
      runEffect(locale).then(setItems);
    }, [locale]);

    return items;
  };
}

export const useCategories = createHookForList(lang => import(`../lang/categories.${lang}.yml`), ({ categories }) => ({

}));
export const useQuotes = createHookForList(lang => import(`../lang/quotes.${lang}.yml`))

export function useCategory(id) {
  const intl = useIntl();
  const { categories } = useCategories(intl.locale);

  if (!categories) {
    return
  }

  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < categories[i].children.length; j++) {
      if (id === categories[i].children[j].name) {
        return categories[i].children[j]
      }
    }
  }
}