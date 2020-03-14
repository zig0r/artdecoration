import React from 'react';
import { FormattedMessage as T, useIntl } from 'react-intl';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

const Header = () => {
  const intl = useIntl();

  return (
    <header className={s.header}>
      <div className={s.container}>
        <NavLink exact to="/" className={s.logo}>
          <T id="name" />
        </NavLink>
        <div className={s.nav}>
          <NavLink exact to="/" className={s.item}>
            <T id="menu.studio" />
          </NavLink>
          <NavLink to="/service" className={s.item}>
            <T id="menu.services" />
          </NavLink>
          <NavLink to="/gallery" className={s.item}>
            <T id="menu.gallery" />
          </NavLink>
          <NavLink to="/contacts" className={s.item}>
            <T id="menu.contacts" />
          </NavLink>
          <div className={s.phones}>
            {intl.messages.raw.menu.phones
              .map((phone, index) => <div key={index} dangerouslySetInnerHTML={{ __html: phone }} />)}
          </div>
          <div className={s.brush}></div>
        </div>
      </div >
    </header >
  )
}

export default Header;
