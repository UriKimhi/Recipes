import React from "react";
import Slider from "react-slick";

const settings = {
  className: "center",
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 5,
  swipeToSlide: true,
  afterChange: function (index) {
    console.log(
      `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    );
  },
};
const images = [
  require('../Assest/1.jpg'),
  require('../Assest/2.jpg'),
  require('../Assest/3.jpg'),
  require('../Assest/4.jpg'),
  require('../Assest/5.jpg'),
  require('../Assest/6.jpg')
]
export const Popular = () => {
  return (
    <div>
      <h2 style={{color:"white"}}>The Popular Recips</h2>
      <Slider {...settings}>
        {images.map((item,index) => {
          return <div key={index}> <img src={item} /> </div>;
        })}
      </Slider>
    </div>
  );
};
