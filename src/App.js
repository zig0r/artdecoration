import React from 'react';
import { IntlProvider } from 'react-intl';
import flattenObject from 'flat';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Studio from './components/Studio/Studio';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Footer from './components/Footer/Footer';
import Contacts from './components/Contacts/Contacts';
import PageNotFound from './components/PageNotFound/PageNotFound';
import messages from './content/uk.yml';

const App = () => {
  const defaultLocale = 'uk';
  const appMessages = flattenObject(messages);
  appMessages.raw = messages;
  return (
    <BrowserRouter>
      <IntlProvider locale={defaultLocale} messages={appMessages}>
        <Header />
        <Switch>
          <Route exact path={["/", "/main"]} component={Studio} />
          <Route path="/service/:id?" component={Services} />
          <Route path="/gallery/:id?" component={Gallery} />
          <Route path="/contacts" component={Contacts} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        <Footer />
      </IntlProvider>
    </BrowserRouter>
  )
};

export default App;
