import React from "react";
import Carousel from "react-bootstrap/Carousel";
export const Home = () => {
  return (
    <Carousel>
      {
        <Carousel.Item>
          <img
            style={{ height: "650px", width: "100%" }}
            src={require("../Assest/deep-dish-pizza-chicago.jpg")}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      }
      <Carousel.Item>
        <img
          style={{ height: "650px", width: "100%", resize: "strech" }}
          src={require("../Assest/default-pasta.jpg")}
          alt="First slide"
        />
        <Carousel.Caption></Carousel.Caption>
      </Carousel.Item>
      {
        <Carousel.Item>
          <img
            style={{ height: "650px", width: "100%" }}
            h
            src={require("../Assest/p09wrjyz.jpg")}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      }
    </Carousel>
  );
};
