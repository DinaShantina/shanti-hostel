import React from "react"
import Imagesdetails from "./imagesdetails"
import allimg from "./allimg.js"
import imgStyle from "./imga.module.scss"

const Allimages = ({ img, number, alt }) => {
  return (
    <div>
      <div className={imgStyle.flexA}>
        {allimg.map(el => {
          return (
            <Imagesdetails
              img={require(`../../src/images/allimg/${el.id}.jpg`)}
              numer={el.number}
              alt={el.id}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Allimages
