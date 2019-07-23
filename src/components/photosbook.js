import React from "react";
import imgStyle from "./imga.module.scss";

const Photosbook = props => {
  return (
    <div>
      {/* <Link to={`/CardDetail/${props.id}`}  > */}
      <div className={imgStyle.detail}>
        <div className={imgStyle.image}>
          <img src={props.img} alt="rooms" />
          <p>{props.title}</p>
          <p className="red-text">{props.price} EUR</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Photosbook;
