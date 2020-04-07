import React from 'react';
import s from './Footer.module.scss';
import { FormattedMessage as T, FormattedHTMLMessage as Thtml, useIntl } from 'react-intl';

const currentYear = new Date().getFullYear();
const Footer = () => {
  const intl = useIntl();
  return (
    <footer className={`container-style top-only ${s.footer}`}>
      <div className="markdown"><Thtml id="footer.describe" values={{ year: currentYear }} /></div>
      <div><T id="footer.share" /></div>
      <div><input className={s.search} type="text" placeholder={intl.formatMessage({ id: 'footer.placeholder' })} /></div>
    </footer>
  )
}

export default Footer;