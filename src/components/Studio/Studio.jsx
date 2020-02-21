import React from 'react';
import s from './Studio.module.scss';
import SwiperSlide from '../Swiper/SwiperSlide';
import { 
  FormattedMessage as T, 
  FormattedHTMLMessage as Thtml, 
  useIntl 
} from 'react-intl';
import { NavLink } from 'react-router-dom';

const Studio = () => {
  const intl = useIntl();
  console.log(intl.messages.raw.categories.decorItems)
  return (
    <div>
      <SwiperSlide name="main" />

      <div className="content">
        <h3 className="container-style">
          <T id="menu.studio" />
        </h3>

        <div className="markdown" id={s. main}>
          <Thtml id="main.content" />
        </div>

        <div className="container-style">
          <div className="categories">
            <div>
              <h3><T id="categories.decor" /></h3>
              {/* <div>{intl.messages.raw.categories.decorItems.map((item, index) => <div key={index}>{item}</div>)}</div> */}
            </div>
            <div>
              <h3></h3>
            </div>
            <div></div>
          </div>
        </div>
        <div className={s.brief}>
          <div className={s.contacts}>
            <NavLink to="/contacts" />
          </div>
          <div className="markdown">
            <Thtml id="contacts.details" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Studio;