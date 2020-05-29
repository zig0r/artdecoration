import { useState, useEffect } from 'react';
import { useI18n } from './i18n';

export function createHookForList(runEffect) {
  return () => {
    const [items, setItems] = useState({});
    const { lang } = useI18n();

    useEffect(() => {
      runEffect(lang).then(setItems);
    }, [lang]);

    return items;
  };
}
