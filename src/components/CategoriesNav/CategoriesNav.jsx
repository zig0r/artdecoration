import React from 'react';
import { useState } from 'react';
import { useCategories } from '../../services/categories';
import VerticalNav from './VerticalNav';
import HorizontalNav from './HorizontalNav';

export default (props) => {
  const { categories, byName } = useCategories();
  const [selectedParent, selectParent] = useState(null);

  if (!categories) {
    return null;
  }

  const activeParent = selectedParent || byName[props.activeId].parent;
  const Nav = props.horizontal ? HorizontalNav : VerticalNav;

  return <Nav
    categories={categories}
    selectParent={selectParent}
    activeParent={activeParent}
    pathPrefix={props.pathPrefix}
  />
};
