import React from 'react';
import Swiper from 'react-id-swiper';
import { FormattedMessage as T, useIntl } from 'react-intl';
import 'swiper/swiper.scss';
import './SwiperSlide.scss';

const params = {
  slidesPerView: 'auto',
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
};

const requireImage = require.context('../../img/galleries', true, /\.(jpe?g|png|svg)$/);
const IMAGES = requireImage.keys().reduce((images, path) => {
  const type = path.slice(2, path.indexOf('/', 2));
  images[type] = images[type] || [];
  images[type].push(requireImage(path));
  return images;
}, {});

export default (props) => {
  const intl = useIntl();
  const images = IMAGES[props.name];

  return (
    <Swiper {...params} slideClass="effect2">
      {images.map(url => (
        <div key={url}>
          <img src={url} />
        </div>
      ))}
    </Swiper>
  )
};
