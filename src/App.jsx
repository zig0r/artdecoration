import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { Router, useLocation } from 'react-router-dom';
import { I18nContext, useI18n } from './services/i18n';
import history from './services/history';

const App = () => {
  const { lang } = useI18n();
  const { pathname } = useLocation();

  if (!lang) {
    return null;
  }

  const className = pathname === '/' || pathname === '/main'
    ? ''
    : 'content-wrapper';

  return (
    <>
      <Header />
      <div className={className}>
        <AppRoutes />
      </div>
      <Footer className="content-wrapper" />
    </>
  );
};

export default () => (
  <I18nContext.Provider value={{ lang: 'uk' }}>
    <Router history={history}>
      <App />
    </Router>
  </I18nContext.Provider>
);
