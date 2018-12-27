import React from 'react';
import Slider from 'react-slick';
import Box from '../base/Box';
import boyIcon from '../../assets/boyIcon.png';
import boyIcon2 from '../../assets/boyIcon2.png';
import girlIcon from '../../assets/girlIcon.png';

const settings = {
  dots: true,
  infinite: true,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  lazyLoad: true,
  centerMode: true,
  fade: true,
  arrows: true,
  autoplaySpeed: 5000,
};

const SliderBox = () => (
  <Box>
    <div className="home-box__header">
      <h3>Customer Review</h3>
    </div>
    <div className="divider margin--small-bottom" />
    <Slider { ...settings } className="slider">
      <div className="slider__list">
        <h3 className="slider__list__title">
          Adam
        </h3>
        <div className="slider__list--div">
          <img 
            src={ boyIcon } 
            alt="boyIcon"
            className="slider__list__image"
          />
        </div>
        <div>I love this website!</div>
      </div>
      <div className="slider__list">
        <h3 className="slider__list__title">
          Lilly
        </h3>
        <div className="slider__list--div">
          <img 
            src={ girlIcon } 
            alt="boyIcon"
            className="slider__list__image"
          />
        </div>
        <div>This website is great!</div>
      </div>
      <div className="slider__list">
        <h3 className="slider__list__title">
          James
        </h3>
        <div className="slider__list--div">
          <img 
            src={ boyIcon2 } 
            alt="boyIcon"
            className="slider__list__image"
          />
        </div>
        <div>Cool crypto data you got there!</div>
      </div>
    </Slider>
  </Box>
);

export default SliderBox;
