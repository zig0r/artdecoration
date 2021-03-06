import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CategoriesNav.module.scss';

export default ({ categories, activeParent, selectParent, pathPrefix }) => (
  <div className={s.menu}>
    <div className={s.container}>
      {categories.map((item) => (
        <div
          className={`${s.menuItem} ${activeParent === item ? s.active : ''}`}
          key={item.id}
          onClick={() => selectParent(item)}
        >
          <button type="button" className={`${s.title} btn`}>{item.title}</button>
        </div>
      ))}
    </div>
    {categories.map((item) => (
      <nav
        key={item.id}
        className={`${s.submenu} ${activeParent === item ? s.active : ''}`}
      >
        {item.children.map((child) => (
          <NavLink
            to={`/${pathPrefix}/${child.id}`}
            key={child.id}
            className={s.inlineItem}
            activeClassName={s.active}
          >
            {child.title}
          </NavLink>
        ))}
      </nav>
    ))}
  </div>
)
