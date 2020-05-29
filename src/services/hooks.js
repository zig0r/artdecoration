import { useState, useEffect } from 'react';

export function createHookForList(runEffect) {
  return (locale) => {
    const [items, setItems] = useState({});
    useEffect(() => {
      runEffect(locale).then(setItems);
    }, [locale]);

    return items;
  };
}
