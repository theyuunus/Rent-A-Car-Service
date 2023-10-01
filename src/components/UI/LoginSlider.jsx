import React from 'react';
import Slider from 'react-slick';

const CarSlider = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000, 
  };

  const containerStyle = {
    width: "46%",
    alignItems: "center",
    paddingTop: "50px",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img style={{ width: "700px" }} src={image} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
