import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import Slideshow from "../components/slideshow"
import layoutStyle from "./contact.module.scss"
import Logo from "../logo.jpg"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      {/* <h3 className={layoutStyle.padx}>
        We are Shanti Hostel, home away from home in Skopje.
      </h3> */}
      <div className={layoutStyle.logo}>
        <div className={layoutStyle.icons}>
          <a href="https://www.facebook.com/shantihostels/" target="__blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/shantihostel/" target="__blank">
            <FaInstagram />
          </a>
        </div>
        <img src={Logo} />
      </div>
      <Slideshow className={layoutStyle.padx} />
      <p>
        Do you need accommodation? <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
