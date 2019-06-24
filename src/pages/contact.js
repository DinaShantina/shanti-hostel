import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"
import Phone from "../phone.png"
// src={require(`../src/images/covers/${this.state.details.cover}.jpg`)}
const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactStyles.contact}>
        <h1>Contact Us</h1>
        <p>
          <a href="tel: +389 2 60 90 807">
            {/* <img src={require('./logo.jpeg')} / */}
            <img src={Phone} alt="logo" />
          </a>
          &nbsp;+389 2 60 90 807
        </p>
        <p>address: str.rade Jovcevski Korcagin 11</p>
        <p>Skopje</p>
        <p>Macedonia</p>
        <p>
          Reach us directy Shanti Hostel via&nbsp;
          <a href="mailto: hostelshanti@gmail.com" target="_blank">
            Email
          </a>
          .
        </p>
      </div>
    </Layout>
  )
}

export default ContactPage
