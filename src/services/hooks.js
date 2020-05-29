import { useState, useEffect } from 'react';
import { useI18n } from './i18n';

export function createHookForList(runEffect) {
  let currentItems = {};
  return () => {
    const [items, setItems] = useState();
    const { lang } = useI18n();

    useEffect(() => {
      runEffect(lang).then((newItems) => {
        currentItems = newItems;
        setItems(newItems);
      });
    }, [lang]);

    return currentItems || items;
  };
}
