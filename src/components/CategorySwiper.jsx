import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
import { categoriesGallery } from '../services/gallery';

const mainSwiperOptions = {
  lazy: true,
  containerClass: 'swiper-container category-swiper',
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
};
const thumbsSwiperOptions = {
  containerClass: 'swiper-container thumbs-swiper',
  spaceBetween: 10,
  slidesPerView: 'auto',
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  mousewheel: true
};

function useAsSwiperController(categorySwiper, thumbsSwiper) {
  useEffect(() => {
    if (!categorySwiper || !thumbsSwiper) {
      return;
    }

    if (!categorySwiper.thumbs.swiper) {
      categorySwiper.thumbs.swiper = thumbsSwiper;
      categorySwiper.thumbs.init();
      categorySwiper.thumbs.update(true);
    }
  }, [categorySwiper, thumbsSwiper]);
}

export default (props) => {
  const [categorySwiper, setCategorySwiper] = useState(null);
  const [thumbsSwiper, setThumbnailSwiper] = useState(null);
  const images = categoriesGallery[props.name];

  if (!images) {
    return null;
  }

  useAsSwiperController(categorySwiper, thumbsSwiper);

  return (

    <div >
      <Swiper {...thumbsSwiperOptions} getSwiper={setThumbnailSwiper}>
        {images.map((url, index) => (
          <div key={index} style={{ backgroundImage: `url(${url})` }}></div>
        ))}
      </Swiper>
      <Swiper {...mainSwiperOptions} getSwiper={setCategorySwiper}>
        {images.map((url) => (
          <div key={url}>
            <img data-src={url} className="swiper-lazy" alt="decor" height="600" />
            <div className="swiper-lazy-preloader" />
          </div>
        ))}
      </Swiper>
    </div>
  );
};
