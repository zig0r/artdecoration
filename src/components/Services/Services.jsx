import React from 'react';
import s from './Services.module.scss';
import { useParams, Redirect, useLocation } from 'react-router-dom';
import { FormattedMessage as T, useIntl } from 'react-intl';
import { useCategories, useCategory } from '../../services/hooks';
import CategoriesNav from '../CategoriesNav/CategoriesNav';
import CategorySwiper from './ServicesSwiper';

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
        <T id="services.name" />
      </h3>

      <div className={s.serviceBlock}>
        <div className={s.menu}>
          <CategoriesNav activeId={params.id} pathPrefix="service" />
        </div>
        <div className={s.content}>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: category.description }}></div>
        </div>
      </div>
      <CategorySwiper name={category.name} key={category.name} />
    </div>
  )
};
