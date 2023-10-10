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
    width: "100%",
  };

  return (
    <div style={sliderContainerStyle}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className='CarSlider' style={imageStyle} src={image.src} alt={`Image ${index}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarSlider;
