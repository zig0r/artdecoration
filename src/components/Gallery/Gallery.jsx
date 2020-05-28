import React from 'react';
import { FormattedMessage as T, useIntl } from 'react-intl';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import CategorySwiper from '../Services/ServicesSwiper';
import { useCategories, useCategory } from '../../services/hooks';

export default () => {
  const intl = useIntl();
  const params = useParams()
  const location = useLocation();
  const category = useCategory(params.id);
  const { categories } = useCategories(intl.locale);

  if (!params.id && categories) {
    return <Redirect to={`${location.pathname}/${categories[0].children[0].name}`} />
  }

  if (!category || !categories) {
    return null
  }

  return (
    <div className="content">
      <h3 className="container-style">
        <T id="gallery.name" />
      </h3>
      <CategoriesNav activeId={params.id} pathPrefix="gallery" horizontal />
      <CategorySwiper name={category.name} key={category.name} />
    </div>
  )
};