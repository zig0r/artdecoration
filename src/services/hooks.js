import { useState, useEffect } from 'react';

function createHookForList(runEffect) {
  return (locale) => {
    const [items, setItems] = useState({});
    useEffect(() => {
      runEffect(locale).then(setItems);
    }, [locale]);

    return items;
  };
}

export const useCategories = createHookForList(lang => import(`../lang/categories.${lang}.yml`))
export const useQuotes = createHookForList(lang => import(`../lang/quotes.${lang}.yml`))
