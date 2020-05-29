import MiniSearch from 'minisearch';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import memoize from 'lodash/memoize';
import { fetchCategories } from './categories';
import searchOptions from '../config/search';
import history from './history';

const getSearchInstance = memoize(async (lang) => {
  const { byName } = await fetchCategories(lang);
  const instance = new MiniSearch(searchOptions);

  Object.values(byName).forEach((category) => {
    if (category.children && !category.description) {
      return;
    }

    instance.add(category);
  });

  return instance;
});

function markHints(result) {
  return result.terms.reduce((hints, term) => {
    const regexp = new RegExp(`(${term})`, 'gi');

    result.match[term].forEach((field) => {
      const value = hints[field] || result.doc[field] || result[field];
      hints[field] = value.replace(regexp, '<mark>$1</mark>');
    });

    return hints;
  }, {});
}

export function useSearchResults(lang, query) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    Promise.all([fetchCategories(lang), getSearchInstance(lang)])
      .then(([{ byName }, instance]) => {
        const foundResults = instance.search(query, { prefix: true })
          .slice(0, 15)
          .map((result) => {
            result.doc = byName[result.id];
            result.hints = markHints(result);
            return result;
          });
        setResults(foundResults);
      });
  }, [lang, query]);

  return results;
}

export function useSearchQuery() {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const submit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${event.target.q.value}`);
  };

  return [query.get('q'), submit];
}
