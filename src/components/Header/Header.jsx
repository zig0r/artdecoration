import React from 'react';
import { NavLink } from 'react-router-dom';
import { useI18n } from '../../services/i18n';
import Html from '../Html';
import s from './Header.module.scss';

export default () => {
  const { t, messages } = useI18n();

  return (
    <header className={s.header}>
      <div className={s.container}>
        <NavLink exact to="/" className={s.logo}>{t('name')}</NavLink>
        <nav className={s.nav}>
          <NavLink exact to="/" className={s.item}>{t('menu.studio')}</NavLink>
          <NavLink to="/service" className={s.item}>{t('menu.services')}</NavLink>
          <NavLink to="/gallery" className={s.item}>{t('menu.gallery')}</NavLink>
          <NavLink to="/contacts" className={s.item}>{t('menu.contacts')}</NavLink>
          <div className={s.phones}>
            {messages && messages.menu.phones
              .map((phone, index) => <Html key={index} value={phone} />)}
          </div>
          <div className={s.brush} />
        </nav>
      </div>
    </header>
  )
};
