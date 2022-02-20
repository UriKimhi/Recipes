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
export const Popular = () => {
  return (
    <div>
      <h2 style={{color:"white"}}>The Popular Recips</h2>
      <Slider {...settings}>
        {[1,2,3,4,5,6,7].map((item,index) => {
          return <div key={index}> <h3 style={{color:"white"}} >{item}</h3> </div>;
        })}
      </Slider>
    </div>
  );
};
