import React from 'react';
import Html from '../Html';
import { useSearchQuery } from '../../services/search';
import { useI18n } from '../../services/i18n';
import s from './Footer.module.scss';

const currentYear = new Date().getFullYear();

export default (props) => {
  const { t } = useI18n();
  const [, submit] = useSearchQuery();
  const submitAndReset = (event) => {
    submit(event);
    event.target.q.value = '';
  };

  return (
    <footer className={`container-style top-only ${s.footer} ${props.className}`}>
      <Html className="markdown" value={t('footer.describe', { year: currentYear })} />
      <div>{t('footer.share')}</div>
      <form onSubmit={submitAndReset}>
        <input name="q" className={s.search} placeholder={t('footer.placeholder')} />
      </form>
    </footer>
  )
};
