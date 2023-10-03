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

  const sliderContainerStyle = {
    width: "46%",
    alignItems: "center",
    paddingTop: "50px",
    overflow: "hidden",
  };

  const imageStyle = {
    width: "100%", // Ensure the image scales responsively
  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img style={imageStyle} src={image.src} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
