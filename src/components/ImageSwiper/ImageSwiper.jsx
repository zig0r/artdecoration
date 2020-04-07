import React from 'react';
import Swiper from 'react-id-swiper';
import './ImageSwiper.scss';
import GALLERIES from '../../services/gallery';

const params = {
  slidesPerView: 'auto',
  centeredSlides: true,
  slideToClickedSlide: true,
  loop: true,
  autoplay: {
    delay: 50000,
    disableOnInteraction: false
  },
};

export default (props) => {
  const images = GALLERIES[props.name];

  return (
    <div className="image-swiper">
      <Swiper {...params} slideClass="no-styles">
        {images.map((url) => (
          <div key={url}>
            <img src={url} height="400" width="1100" alt="decor" />
          </div>
        ))}
      </Swiper>
    </div>
  )
};
