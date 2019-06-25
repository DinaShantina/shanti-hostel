import React from "react"
import toggleStyle from "./DrawerToggleButtons.module.scss"

const DrawerToggleButton = props => {
  return (
    <button className={toggleStyle.toggleButton} onClick={props.click}>
      <div className={toggleStyle.toggleButtonLine}></div>
      <div className={toggleStyle.toggleButtonLine}></div>
      <div className={toggleStyle.toggleButtonLine}></div>
    </button>
  )
}

export default DrawerToggleButton
