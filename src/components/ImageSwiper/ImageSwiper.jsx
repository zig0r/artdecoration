import React from 'react';
import Swiper from 'react-id-swiper';
import './ImageSwiper.scss';

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

const requireImage = require.context('../../img/galleries', true, /\.(jpe?g|png|svg)$/);
const IMAGES = requireImage.keys().reduce((images, path) => {
  const type = path.slice(2, path.indexOf('/', 2));
  images[type] = images[type] || [];
  images[type].push(requireImage(path));
  return images;
}, {});

export default (props) => {
  const images = IMAGES[props.name];

  return (
    <div className="image-swiper">
      <Swiper {...params} slideClass="no-styles">
        {images.map((url) => (
          <div key={url}>
            <img src={url} height="400" width="1100" />
          </div>
        ))}
      </Swiper>
    </div>
  )
};
