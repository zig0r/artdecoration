import React, { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AppRoutes from './components/AppRoutes/AppRoutes';
import { Router, useLocation } from 'react-router-dom';
import { I18nContext, useI18n } from './services/i18n';
import history from './services/history';

const App = () => {
  const { lang } = useI18n();
  const { pathname } = useLocation();

  useEffect(() => {
    document.addEventListener('keypress', (event) => {
      // ctrl + shift + v
      if (event.ctrlKey && event.shiftKey && event.keyCode === 22) {
        console.log(process.env.REACT_APP_COMMIT_HASH || 'unknown');
      }
    }, false);
  }, []);

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
