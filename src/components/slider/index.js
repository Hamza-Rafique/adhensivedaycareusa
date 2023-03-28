import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img
            src="https://source.unsplash.com/WLUHO9A_xik/800x600"
            alt="school children"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/yYwHqXEJqfA/800x600"
            alt="school children"
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/7vSjXlcgE7s/800x600"
            alt="school children"
          />
        </div>
      </Slider>
    </Container>
  );
}

export default ImageSlider;
