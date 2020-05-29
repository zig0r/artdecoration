import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './components/AppRoutes/AppRoutes';
import Meta from './components/Meta';
import { Router, useLocation } from 'react-router-dom';
import { I18nContext, useI18n } from './services/i18n';
import { useAppVersion } from './services/hooks';
import history from './services/history';

const App = () => {
  const { lang } = useI18n();
  const { pathname } = useLocation();
  useAppVersion();

  if (!lang) {
    return null;
  }

  const className = pathname === '/' || pathname === '/main'
    ? ''
    : 'content-wrapper';

  return (
    <>
      <Meta name="main" />
      <Header />
      <div className={className}>
        <AppRoutes />
      </div>
      <div className="content-wrapper">
        <Footer />
      </div>
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
