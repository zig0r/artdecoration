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

export function useAppVersion() {
  useEffect(() => {
    document.addEventListener('keypress', (event) => {
      // ctrl + shift + v
      if (event.ctrlKey && event.shiftKey && event.keyCode === 22) {
        console.log('Build version: ', process.env.REACT_APP_COMMIT_HASH || 'unknown');
        console.log('Build time: ', process.env.REACT_APP_BUILD_TIME || 'unknown');
      }
    }, false);
  }, []);
}
