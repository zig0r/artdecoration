import React, { useState, useEffect } from 'react';
import { useI18n } from '../../services/i18n';
import s from './SearchPage.module.scss';

export default ({ value, onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');
  const { t } = useI18n();

  useEffect(() => {
    setSearchValue(value);
  }, [value]);

  return (
    <form onSubmit={onSubmit}>
      <div className={s.searchInput}>
        <input name="q" value={searchValue} onChange={event => setSearchValue(event.target.value)} />
        <button type="submit" className="btn">{t('search.findButton')}</button>
      </div>
    </form>
  );
};
