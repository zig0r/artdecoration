import React from 'react';
import s from './SearchPage.module.scss';
import { FormattedMessage as T } from 'react-intl';

const noop = () => { };

export default ({ value, onSearch }) => {
  const submit = (event) => {
    event.preventDefault();
    onSearch(event.target.q.value);
  };

  return (
    <form onSubmit={submit}>
      <div className={s.searchInput}>
        <input name="q" value={value} onChange={noop} />
        <button type="submit" className="btn"><T id="search.findButton" /></button>
      </div>
    </form>
  );
};