import { Translator } from '@eo-locale/core';
import { createContext, useState, useContext, useEffect } from 'react';
import memoize from 'lodash/memoize';

const getI18n = memoize(async (lang) => {
  const messages = await import(`../content/app.${lang}.yml`);
  return createI18n(lang, messages);
});

function createI18n(lang, messages) {
  const i18n = new Translator(lang, [{
    language: lang,
    messages,
  }]);

  return {
    i18n,
    t: i18n.translate.bind(i18n),
    lang,
    messages,
  };
}

let currentI18n = createI18n('');
currentI18n.i18n.onError = () => {};

export const I18nContext = createContext();

export function useI18n() {
  const [i18n, setI18n] = useState(null);
  const { lang } = useContext(I18nContext);

  useEffect(() => {
    if (!lang) {
      return;
    }

    getI18n(lang).then((instance) => {
      if (i18n !== instance) {
        currentI18n = instance;
        setI18n(instance);
      }
    });
  }, [lang, i18n]);

  return i18n || currentI18n;
}
