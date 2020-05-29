import React from 'react';
import { useParams } from 'react-router-dom';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import CategorySwiper from '../Services/CategorySwiper';
import { useCategories, useCategory, useCategoriesRedirect } from '../../services/categories';
import { useI18n } from '../../services/i18n';

export default () => {
  const params = useParams()
  const category = useCategory(params.id);
  const { categories } = useCategories();
  const redirect = useCategoriesRedirect(categories, params);
  const { t } = useI18n();

  if (redirect) {
    return redirect;
  }

  if (!category || !categories) {
    return null
  }

  return (
    <div className="content">
      <h3 className="container-style">{t('gallery.name')}</h3>
      <CategoriesNav activeId={params.id} pathPrefix="gallery" horizontal />
      <CategorySwiper name={category.id} key={category.id} />
    </div>
  )
};
