import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CategoriesNav.module.scss';

export default ({ categories, activeParent, selectParent, pathPrefix }) => (
  <div className={s.menu}>
    {categories.map((item) => (
      <div
        className={activeParent === item ? s.active : ''}
        key={item.name}
        onClick={() => selectParent(item)}
      >
        <button type="button" className={`${s.title} btn`}>{item.title}</button>

        <div className={`${s.submenu} ${activeParent === item ? s.active : ''}`}>
          {item.children.map((child) => (
            <div className={s.item} key={child.name}>
              <NavLink to={`/${pathPrefix}/${child.name}`}>{child.title}</NavLink>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);
