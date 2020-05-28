import React from 'react';
import { FormattedMessage as T, FormattedHTMLMessage as Thtml, useIntl } from 'react-intl';
import { useSearchQuery } from '../../services/search';
import s from './Footer.module.scss';

const currentYear = new Date().getFullYear();

export default () => {
  const intl = useIntl();
  const [, submit] = useSearchQuery();
  const submitAndReset = (event) => {
    submit(event);
    event.target.q.value = '';
  };

  return (
    <footer className={`container-style top-only ${s.footer}`}>
      <div className="markdown"><Thtml id="footer.describe" values={{ year: currentYear }} /></div>
      <div><T id="footer.share" /></div>
      <form onSubmit={submitAndReset}>
        <input
          name="q"
          className={s.search}
          placeholder={intl.formatMessage({ id: 'footer.placeholder' })}
        />
      </form>
    </footer>
  )
};
