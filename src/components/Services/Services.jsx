import React from 'react';
import { useParams } from 'react-router-dom';
import { FormattedMessage as T, useIntl } from 'react-intl';
import { useCategories, useCategory, useCategoriesRedirect } from '../../services/categories';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import CategorySwiper from './ServicesSwiper';
import s from './Services.module.scss';

export default () => {
  const intl = useIntl();
  const params = useParams()
  const category = useCategory(intl.locale, params.id);
  const { categories } = useCategories(intl.locale);
  const redirect = useCategoriesRedirect(categories, params);

  if (redirect) {
    return redirect;
  }

  if (!categories || !category) {
    return null;
  }

  return (
    <div className="content">
      <h3 className="container-style">
        <T id="services.name" />
      </h3>
      <div className={s.serviceBlock}>
        <div className={s.menu}>
          <CategoriesNav activeId={params.id} pathPrefix="service" useInSitemap />
        </div>
        <div className={s.content}>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: category.description }}></div>
        </div>
      </div>
      <CategorySwiper name={category.id} key={category.id} />
    </div>
  )
};
