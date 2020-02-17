import React from 'react';
import { IntlProvider } from 'react-intl';
import './App.scss';
import Header from './components/Header/Header';
import messages from './lang/uk-UA.yml';

const App = () => {
  const defaultLocale = 'uk-UA';
  return (
    <IntlProvider locale={defaultLocale} messages={messages}>
      <div className="app-wrapper">
        <Header />
      </div>
    </IntlProvider>
  )
};

export default App;
