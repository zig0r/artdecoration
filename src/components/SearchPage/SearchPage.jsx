import React, { useCallback } from 'react';
import { FormattedMessage as T } from 'react-intl';
import { useLocation } from 'react-router-dom';
import SearchInput from './SearchInput';
import history from '../../services/history';

export default () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const search = useCallback(value => history.push(`${location.pathname}?q=${value}`));

  return (
    <div className="content">
      <h3 className="container-style">
        <T id="search.name" values={{ amount: 0 }} />
      </h3>
      <SearchInput value={query.get('q')} onSearch={search} />
      {/* <SearchResults /> */}
    </div>
  );
};