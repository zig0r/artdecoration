import React from 'react';
import { useParams } from 'react-router-dom';
import { useCategories, useCategory, useCategoriesRedirect } from '../../services/categories';
import { useI18n } from '../../services/i18n';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import CategorySwiper from './CategorySwiper';
import s from './Services.module.scss';
import Html from '../Html';

export default () => {
  const params = useParams();
  const { t } = useI18n();
  const category = useCategory(params.id);
  const { categories } = useCategories();
  const redirect = useCategoriesRedirect(categories, params);

  if (redirect) {
    return redirect;
  }

  if (!categories || !category) {
    return null;
  }

  return (
    <div className="content">
      <h3 className="container-style">{t('services.name')}</h3>
      <div className={s.serviceBlock}>
        <div className={s.menu}>
          <CategoriesNav activeId={params.id} pathPrefix="service" />
        </div>
        <div className={s.content}>
          <Html className="markdown" value={category.description} />
        </div>
      </div>
      <CategorySwiper name={category.id} key={category.id} />
    </div>
  )
};
