import React from "react"
import imgStyle from "./imga.module.scss"

const Imagesdetails = props => {
  return (
    <div className={imgStyle.allimages}>
      <img src={props.img} number={props.number} />
    </div>
  )
}

export default Imagesdetails
