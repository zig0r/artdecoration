import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CategoriesNav.module.scss';

export default ({ categories, activeParent, selectParent, pathPrefix }) => (
  <div className={s.menu}>
    {categories.map((item) => (
      <div
        className={activeParent === item ? s.active : ''}
        key={item.id}
        onClick={() => selectParent(item)}
      >
        <button type="button" className={`${s.title} btn`}>{item.title}</button>

        <nav
          className={`${s.submenu} ${activeParent === item ? s.active : ''}`}
        >
          {item.children.map((child) => (
            <div className={s.item} key={child.id}>
              <NavLink to={`/${pathPrefix}/${child.id}`}>{child.title}</NavLink>
            </div>
          ))}
        </nav>
      </div>
    ))}
  </div>
);
