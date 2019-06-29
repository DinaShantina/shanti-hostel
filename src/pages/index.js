import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Slideshow from "../components/slideshow"
import layoutStyle from "./contact.module.scss"
import Logo from "../logo.jpg"
import { FaViber, FaWhatsapp } from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />

      <div className={layoutStyle.logo}>
        <img src={Logo} />
      </div>
      <Slideshow className={layoutStyle.padx} />
      <div className={layoutStyle.whats}>
        <div className={layoutStyle.icon}>
          <a href="viber://contact?number=%2B38970620320">
            <FaViber className={layoutStyle.viber} />
          </a>
          <a href="https://api.whatsapp.com/send?phone=38970620320">
            <FaWhatsapp className={layoutStyle.viber} />
          </a>
        </div>
        <div className={layoutStyle.book}>
          <p>BOOK WITH VIBER or WHATSAPP</p>
          <p>+389 70 620 320</p>
          <p>EASY, FAST &amp; ALWAYS THE BEST PRICE</p>
        </div>
      </div>
      <p className={layoutStyle.accom}>
        Do you need accommodation? <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
