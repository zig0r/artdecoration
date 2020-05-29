import React from 'react';
import { IntlProvider } from 'react-intl';
import flattenObject from 'flat';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import messages from './content/uk.yml';
import history from './services/history';

import routesConfig from './config/routes.yml';
import Studio from './components/Studio/Studio';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/Contacts';
import SearchPage from './components/SearchPage/SearchPage';
import PageNotFound from './components/PageNotFound/PageNotFound';

const pages = {
  Studio,
  Services,
  Gallery,
  Contacts,
};
const defaultLocale = 'uk';
const appMessages = flattenObject(messages);

appMessages.raw = messages;

export default () => {
  return (
    <Router history={history}>
      <IntlProvider locale={defaultLocale} messages={appMessages}>
        <Header />
        <div className="content-wrapper">
          <Switch>
            {routesConfig.routes.map((route) => (
              <Route
                key={route.path.toString()}
                exact={!!route.exact}
                path={route.path}
                component={pages[route.component]}
              />
            ))}
            <Route path="/search" component={SearchPage} />
            <Route path="*" component={PageNotFound} />
          </Switch>
          <Footer />
        </div>
      </IntlProvider>
    </Router>
  )
};
