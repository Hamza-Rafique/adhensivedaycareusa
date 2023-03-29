import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import './slider.css'

function ImageSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        <div>
          <img
            src="http://img1.wsimg.com/isteam/stock/74pag1V/:/rs=w:1200,cg:true,m"
            alt="school children"
          />
        </div>
        <div>
          <img
            src="http://img1.wsimg.com/isteam/stock/7734/:/rs=w:1200,cg:true,m"
            alt="school children"
          />
        </div>
        <div>
          <img
            src="http://img1.wsimg.com/isteam/stock/xqgp9aG/:/rs=w:1200,cg:true,m"
            alt="school children"
          />
        </div>
      </Slider>
    </Container>
  );
}

export default ImageSlider;
