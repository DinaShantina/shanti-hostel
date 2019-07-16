import React from "react";
import { Slide } from "react-slideshow-image";
import img1 from "../images/slides/slide1.jpg";
import img2 from "../images/slides/slide2.jpg";
import img3 from "../images/slides/slide3.jpg";
import img4 from "../images/slides/slide4.jpg";
import slideStyle from "./slideshow.module.scss";

const proprietes = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
};

const Slideshow = () => {
  return (
    <div className="containerSlide" className={slideStyle.slider}>
      <Slide {...proprietes}>
        <div className="each-slide">
          <div>
            <img src={img1} alt="img1" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img2} alt="img2" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img3} alt="img3" />
          </div>
        </div>
        <div className="each-slide">
          <div>
            <img src={img4} alt="img4" />
          </div>
        </div>
      </Slide>
    </div>
  );
};

export default Slideshow;
