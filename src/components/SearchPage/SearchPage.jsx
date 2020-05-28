import React from 'react';
import { FormattedMessage as T, useIntl } from 'react-intl';
import { useSearchQuery, useSearchResults } from '../../services/search';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import s from './SearchPage.module.scss';

export default () => {
  const [query, submit] = useSearchQuery();
  const intl = useIntl();
  const results = useSearchResults(intl.locale, query);
  let searchResults = null;

  if (query) {
    searchResults = results.length
      ? <SearchResults results={results} />
      : <div className={s.searchResults}><T id="search.notFound" /></div>;
  }

  return (
    <div className="content">
      <h3 className="container-style">
        <T id="search.name" values={{ amount: results.length }} />
      </h3>
      <SearchInput value={query} onSubmit={submit} />
      {searchResults}
    </div>
  );
};
