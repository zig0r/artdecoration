import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routesConfig from '../../config/routes.yml';
import StudioPage from '../StudioPage/StudioPage';
import ServicesPage from '../ServicesPage/ServicesPage';
import GalleryPage from '../GalleryPage/GalleryPage';
import ContactsPage from '../ContactsPage/ContactsPage';
import SearchPage from '../SearchPage/SearchPage';
import PageNotFound from '../PageNotFound/PageNotFound';

const pages = {
  StudioPage,
  ServicesPage,
  GalleryPage,
  ContactsPage,
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
