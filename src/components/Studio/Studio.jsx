import React from 'react';
import Swiper from 'react-id-swiper';
import { NavLink } from 'react-router-dom';
import {
  FormattedMessage as T,
  FormattedHTMLMessage as Thtml,
  useIntl
} from 'react-intl';
import s from './Studio.module.scss';
import './Quotes.swiper.scss';
import ImageSwiper from '../ImageSwiper/ImageSwiper';
import Categories from './Categories';
import { useCategories, useQuotes } from '../../services/hooks';

export default () => {
  const intl = useIntl();
  const { categories } = useCategories(intl.locale);
  const { quotes } = useQuotes(intl.locale);

  const params = {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    }
  };

  return (
    <div>
      <div className={s.swiperContainer}>
        <ImageSwiper name="main" />
        <div className="quotes-container">
          <div className="quotes">
            <Thtml id="quotes.title" />
            {quotes
              ? <Swiper {...params}>
                {quotes.map((quote, index) => (
                  <div key={index}>
                    <div className="quotes-text">
                      <p>{quote.text}</p>
                      <p>{quote.author}</p>
                    </div>
                  </div>
                ))}
              </Swiper>
              : ''
            }
          </div>
        </div>
      </div>

      <div className="content">
        <h3 className="container-style">
          <T id="menu.studio" />
        </h3>

        <div className="markdown" id={s.main}>
          <Thtml id="main.content" />
        </div>

        <div className="container-style">
          <div className={s.categories}>
            {categories && categories.length
              ? <Categories items={categories} />
              : ''
            }
            <div className={s.brushes}>
              <img src={require('../../img/brushes.png')} alt="Brushes" />
            </div>
          </div>
        </div>
        <div className={s.brief}>
          <NavLink to="/contacts">
            <div className={s.contacts}></div>
          </NavLink>
          <div className="markdown">
            <Thtml id="prices.details" />
          </div>
        </div>
      </div>
    </div>
  )
};