import React from 'react';
import { IntlProvider } from 'react-intl';
import flattenObject from 'flat';
import Header from './components/Header/Header';
import Studio from './components/Studio/Studio';
import Services from './components/Services/Services';
import Gallery from './components/Gallery/Gallery';
import Contacts from './components/Contacts/Contacts';
import messages from './lang/uk-UA.yml';
import { BrowserRouter, Route } from 'react-router-dom';


const App = () => {
  const defaultLocale = 'uk-UA';
  const appMessages = flattenObject(messages);
  appMessages.raw = messages;
  return (
    <BrowserRouter>
      <IntlProvider locale={defaultLocale} messages={appMessages}>
        <Header />
        <div className="app-wrapper">
          <Route exact path={["/", "/main"]} component={Studio} />
          <Route path="/service" component={Services} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contacts" component={Contacts} />
        </div>
      </IntlProvider>
    </BrowserRouter>
  )
};

export default App;
