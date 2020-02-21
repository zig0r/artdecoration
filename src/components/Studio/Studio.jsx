import React from 'react';
import './Studio.module.scss';
import SwiperSlide from '../Swiper/SwiperSlide';
import { FormattedMessage as T, FormattedHTMLMessage as Thtml } from 'react-intl';

export default () => (
  <div>
    <SwiperSlide name="main" />

    <div className="content">
      <h3 className="head">
        <T id="menu.studio" />
      </h3>

      <div className="markdown" id="main">
        <Thtml id="main.content" />
      </div>
    </div>
  </div>
)