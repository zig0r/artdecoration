import React from 'react';
import { useState } from 'react';
import s from './Services/Services.module.scss';
import { NavLink, } from 'react-router-dom';
import { useIntl } from 'react-intl';
import { useCategories } from '../services/hooks';

function getParentFromUrl(categories, childId) {
  if (!categories) {
    return '';
  }

  const parent = categories.find((item) => {
    return item.children.some(child => child.name === childId);
  });

  return parent ? parent.name : '';
}

export default (props) => {
  const intl = useIntl();
  const { categories } = useCategories(intl.locale);
  const [selectedParent, selectParent] = useState();

  if (!categories) {
    return null;
  }

  const activeParent = selectedParent || getParentFromUrl(categories, props.activeId);

  return (
    <div className={s.servicesBlock}>
      <div className={s.menu}>
        {categories
          ? categories.map((item) => (
            <div
              className={activeParent === item.name ? s.active : ''}
              key={item.name}
              onClick={() => selectParent(item.name)}
            >
              <button type="button" className={s.title} href="#">{item.title}</button>

              <div className={s.hidden}>
                <ul>
                  {item.children.map((child) => (
                    <li key={child.name}>
                      <NavLink to={`/service/${child.name}`}>{child.title}</NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
          : ''
        }</div>
    </div>
  )
};