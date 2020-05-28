import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './SearchPage.module.scss';

const SearchResult = ({ result }) => {
  const title = result.hints.title || result.doc.title;
  const content = result.hints.content || result.content;

  return (
    <article>
      <h4>
        <NavLink
          to={`/service/${result.id}`}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </h4>
      {content
        ? <div
            className={s.searchResultContent}
            dangerouslySetInnerHTML={{ __html: `${content}...` }}
          />
        : ''
      }
    </article>
  );
};

export default ({ results }) => {
  return (
    <div className={s.searchResults}>
      {results.map(result => <SearchResult key={result.id} result={result} />)}
    </div>
  );
};
