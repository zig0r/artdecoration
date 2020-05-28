import React, { useState, useEffect } from 'react';
import s from './SearchPage.module.scss';
import { FormattedMessage as T } from 'react-intl';

export default ({ value, onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  return (
    <form onSubmit={onSubmit}>
      <div className={s.searchInput}>
        <input name="q" value={searchValue} onChange={event => setSearchValue(event.target.value)} />
        <button type="submit" className="btn"><T id="search.findButton" /></button>
      </div>
    </form>
  );
};
