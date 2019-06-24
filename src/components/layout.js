import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyle from "./layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyle.all}>
      <div className={layoutStyle.container}>
        <Header />
        <div className={layoutStyle.content}>{props.children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
