import React from 'react';
import Box from '../base/Box';
import Slider from 'react-slick';
import customer1 from '../../assets/4.jpg';
import customer2 from '../../assets/5.jpg';
import customer3 from '../../assets/6.jpg';
import customer4 from '../../assets/3.jpg';
import customer5 from '../../assets/2.jpg';
import customer6 from '../../assets/1.jpg';

const settings = {
  dots: true,
  infinite: true,
  arrow: false,
  centerMode: true,
  speed: 1000,
  autoplaySpeed: 9000,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
};

const SliderBox = () => (
  <Box>
    <div className="home-box__header">
      <h3>Feedback from our clients</h3>
    </div>
    <div className="divider margin--small-bottom" />
    <Slider { ...settings } className="slider">
      <div className="slider__slide">
        <h3 className="slider__title">
          Jared
        </h3>
        <div className="clider__container">
          <img 
            src={ customer1 } 
            alt="Jared Customer 1"
            className="slider__image"
          />
        </div>
        <div className="slider__text"> This website is like a cool shower after a nice hot summers day~</div>
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">
          Dinesh
        </h3>
        <div className="clider__container">
          <img 
            src={ customer2 } 
            alt="Dinesh Customer 2"
            className="slider__image"
          />
        </div>
        <div className="slider__text">Im not saying I created this magnificent beast of an application, but I must say - this is a pure gem of a website in terms of inovation, share coding skill and integrity!~</div>
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">
          Gilfoyle 
        </h3>
        <div className="clider__container">
          <img 
            src={ customer3 } 
            alt="Gilfoyle Customer 3"
            className="slider__image"
          />
        </div>
        <div className="slider__text">Dont listen to that pakky a**-clown. He would recognised a good code-base if Torvald gave him his. Im a big supporter of crypto - its the way of the future and this sites suck more **** than Dick Van Dikes wife. Its a good thing they never finished it ~</div>
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">
          Elon
        </h3>
        <div className="clider__container">
          <img 
            src={ customer4 } 
            alt="Elon Customer 4"
            className="slider__image"
          />
        </div>
        <div className="slider__text">Since my initial investment in this website, my companies stock prices has skyrocketed. To celebrate - ive shot my own Tesla model in to space - 140 hours a week ~</div>
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">
          Zucc
        </h3>
        <div className="clider__container">
          <img 
            src={ customer5 } 
            alt="Zucc Customer 5"
            className="slider__image"
          />
        </div>
        <div className="slider__text">Tried to leak your data last thrusday - you put up a good fight - 8.9 / 10 !~</div>
      </div>
      <div className="slider__slide">
        <h3 className="slider__title">
          Jake
        </h3>
        <div className="clider__container">
          <img 
            src={ customer6 } 
            alt="Jake Customer 6"
            className="slider__image"
          />
        </div>
        <div className="slider__text">Like my ex left me for a dude who like had bitcoins, so thanks to this site, ive like found the f***er and stole his hat~</div>
      </div>
    </Slider>
  </Box>
);

export default SliderBox;