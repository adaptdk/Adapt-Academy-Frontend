import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.scss";

const Carousel = ({ data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      {data.map(image => (
        <div className="Carousel" key={image.name}>
          <img className="Carousel__img" src={image.url} alt={image.name} />
        </div>
      ))}
    </Slider>
  );
};

export { Carousel };
