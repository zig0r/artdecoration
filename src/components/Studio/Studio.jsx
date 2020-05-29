import React from 'react';
import Swiper from 'react-id-swiper';
import { NavLink } from 'react-router-dom';
import MainSwiper from '../MainSwiper/MainSwiper';
import Categories from './Categories';
import Html from '../Html';
import { useCategories } from '../../services/categories';
import { useQuotes } from '../../services/quotes';
import { useI18n } from '../../services/i18n';
import s from './Studio.module.scss';
import './Quotes.swiper.scss';

const swiperOptions = {
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

const TopSwiper = () => {
  const { quotes } = useQuotes();
  const { t } = useI18n();
  let QuotesSwiper;

  if (quotes) {
    QuotesSwiper = <Swiper {...swiperOptions}>
      {quotes.map((quote, index) => (
        <div key={index}>
          <div className="quotes-text">
            <p>{quote.text}</p>
            <p>{quote.author}</p>
          </div>
        </div>
      ))}
    </Swiper>;
  }

  return (
    <div className={s.swiperContainer}>
      <MainSwiper />
      <div className="quotes-container">
        <div className="quotes">
          <Html value={t('quotes.title')} />
          {QuotesSwiper}
        </div>
      </div>
    </div>
  );
};

export default () => {
  const { categories } = useCategories();
  const { t } = useI18n();

  return (
    <>
      <TopSwiper />
      <div className="content-wrapper">
        <div className="content">
          <h3 className="container-style">{t('menu.studio')}</h3>
          <Html className={`markdown ${s.textJustify}`} value={t('main.content')} />

          <div className="container-style">
            <div className={s.categories}>
              {categories ? <Categories items={categories} /> : ''}
              <div className={s.brushes}>
                <img src={require('@/img/brushes.png')} alt={t('name')} />
              </div>
            </div>
          </div>
          <div className={s.brief}>
            <NavLink to="/contacts">
              <div className={s.contacts} />
            </NavLink>
            <Html className="markdown" value={t('prices.details')} />
          </div>
        </div>
      </div>
    </>
  );
};
