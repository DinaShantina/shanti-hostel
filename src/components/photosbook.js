import React from "react";
import imgStyle from "./imga.module.scss";
import ModalImage from "react-modal-image";

const Photosbook = props => {
  return (
    <div>
      {/* <Link to={`/CardDetail/${props.id}`}  > */}
      <div className={imgStyle.detail}>
        <div className={imgStyle.image}>
          <ModalImage
            small={props.img}
            medium={props.img1}
            alt={props.title}
            hideZoom={true}
            hideDownload={true}
          />
          <p>{props.title}</p>
          <p className="red-text">{props.price} EUR</p>
        </div>
      </div>
      {/* </Link> */}
    </div>
  );
};

export default Photosbook;
