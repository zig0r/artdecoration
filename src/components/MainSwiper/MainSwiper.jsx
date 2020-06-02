import React from 'react';
import Swiper from 'react-id-swiper';
import { mainGallery } from '../../services/gallery';
import './MainSwiper.scss';

const params = {
  slidesPerView: 'auto',
  centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false
  },
};

export default () => {
  return (
    <div className="image-swiper">
      <Swiper {...params} slideClass="no-styles">
        {mainGallery.map((url) => (
          <div key={url}>
            <img src={url} height="400" width="1100" alt="decor" />
          </div>
        ))}
      </Swiper>
    </div>
  )
};
