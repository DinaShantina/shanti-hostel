import React from "react"
import Photosbook from "./photosbook.js"
import images from "./images.js"
import imgStyle from "./imga.module.scss"

const PhotosDetails = () => {
  return (
    <div>
      <div className={imgStyle.header}>
        <h3>ROOMS</h3>
      </div>
      <div className={imgStyle.fleX}>
        {images.map(el => {
          return (
            <Photosbook
              img={require(`../../src/img/${el.id}.jpg`)}
              title={el.title}
              price={el.price}
              id={el.id}
              alt={el.title}
              onClick={this.props.onClick}
            />
          )
        })}
      </div>
    </div>
  )
}

export default PhotosDetails
