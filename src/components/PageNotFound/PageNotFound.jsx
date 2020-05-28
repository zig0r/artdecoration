import React from 'react';
import {
  FormattedMessage as T,
  FormattedHTMLMessage as Thtml
} from 'react-intl';

export default () => (
  <div className="content">
    <h3 className="container-style">
      <T id="notfound.name" />
    </h3>

    <div className="markdown">
      <Thtml id="notfound.content" />
    </div>
  </div>
);