import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slider.css'; // Import the CSS file for styling

const SliderComponent = ({ items = [] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  if (!items || items.length === 0) {
    return <div>No items to display</div>;
  }

  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;