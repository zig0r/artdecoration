import React from 'react';
import { FormattedMessage as T, useIntl } from 'react-intl';
import { useParams } from 'react-router-dom';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import CategorySwiper from '../Services/ServicesSwiper';
import { useCategories, useCategory, useCategoriesRedirect } from '../../services/categories';

export default () => {
  const intl = useIntl();
  const params = useParams()
  const category = useCategory(intl.locale, params.id);
  const { categories } = useCategories(intl.locale);
  const redirect = useCategoriesRedirect(categories, params);

  if (redirect) {
    return redirect;
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
      <CategorySwiper name={category.id} key={category.id} />
    </div>
  )
};
