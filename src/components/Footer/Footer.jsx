import React from 'react'
import s from './Footer.module.scss';
import { FormattedMessage as T, FormattedHTMLMessage as Thtml } from 'react-intl';

const Footer = () => {
  const placeholder = <T id="footer.placeholder" />
  return (
    <footer className={s.footer}>
      <div className="markdown"><Thtml id="footer.describe" /></div>
      <div><T id="footer.share" /></div>
      <div><input className={s.search} type="text" placeholder={placeholder} /></div>
    </footer>
  )
}

export default Footer;