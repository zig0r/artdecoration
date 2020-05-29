import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesConfig from '../../config/routes.yml';
import Studio from '../Studio/Studio';
import Services from '../Services/Services';
import Gallery from '../Gallery/Gallery';
import Contacts from '../Contacts/Contacts';
import SearchPage from '../SearchPage/SearchPage';
import PageNotFound from '../PageNotFound/PageNotFound';

const pages = {
  Studio,
  Services,
  Gallery,
  Contacts,
};

export default () => (
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
);
