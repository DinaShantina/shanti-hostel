import React from "react";
import Photosbook from "./photosbook.js";
import images from "./images.js";
import imgStyle from "./imga.module.scss";

const PhotosDetails = () => {
  return (
    <div>
      <div className={imgStyle.header}>
        <h3>OUR ROOMS</h3>
        <p>Choose your type of room for your stay in Shanti Hostel:</p>
      </div>
      <div className={imgStyle.fleX}>
        {images.map((el, i) => {
          return (
            <Photosbook
              img={require(`../../src/img/${el.id}.jpg`)}
              img1={require(`../../src/img/imgL/${el.id}.jpg`)}
              title={el.title}
              price={el.price}
              id={el.id}
              alt={el.title}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
};

export default PhotosDetails;
