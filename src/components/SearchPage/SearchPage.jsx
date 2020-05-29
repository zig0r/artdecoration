import React from 'react';
import { useSearchQuery, useSearchResults } from '../../services/search';
import { useI18n } from '../../services/i18n';
import SearchInput from './SearchInput';
import SearchResults from './SearchResults';
import Meta from '../Meta';
import s from './SearchPage.module.scss';

export default () => {
  const [query, submit] = useSearchQuery();
  const results = useSearchResults(query);
  const { t } = useI18n();
  let searchResults = null;

  if (query) {
    searchResults = results.length
      ? <SearchResults results={results} />
      : <div className={s.searchResults}>{t('search.notFound')}</div>;
  }

  return (
    <div className="content">
      <Meta name="search" />
      <h3 className="container-style">{t('search.name', { amount: results.length })}</h3>
      <SearchInput value={query} onSubmit={submit} />
      {searchResults}
    </div>
  );
};
