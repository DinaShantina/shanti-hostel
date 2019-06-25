import React from "react"
import backStyle from "./Backdrop.module.scss"

const Backdrop = props => {
  return <div className={backStyle.backdrop} onClick={props.click}></div>
}

export default Backdrop
