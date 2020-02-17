import React from 'react';
import './Header.scss';
import { FormattedHTMLMessage as Thtml } from 'react-intl';

const Header = () => {
  return (
    <header className="header">
      <Thtml id="test" />
    </header>
  )
}

export default Header;
