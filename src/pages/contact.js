import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import contactStyles from "./contact.module.scss"
import Phone from "../phone.png"
import Iframe from "react-iframe"
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
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2592849614466!2d21.442481032641428!3d41.994710654246944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x309377b0c6a08aa7!2z0KjQsNC90YLQuCDQpdC-0YHRgtC10LsgMQ!5e0!3m2!1sen!2smk!4v1562017120321!5m2!1sen!2smk"
          width="850"
          height="450"
          id="myId"
          className="myClassname"
          display="initial"
          position="relative"
        />

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
