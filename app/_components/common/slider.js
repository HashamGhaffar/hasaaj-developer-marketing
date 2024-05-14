// Carousel.js

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ settings, children, sliderRef }) => {
  return (
    <>
      <div>
        <Slider className="justify-center	" {...settings} ref={sliderRef}>
          {children}
        </Slider>
      </div>
    </>
  );
};

export default Carousel;
