import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import contactStyles from "./contact.module.scss";
import Staff from "../images/staff.jpg";
import Iframe from "react-iframe";
// import Phone from "../phone.png"
import { FaViber, FaWhatsapp } from "react-icons/fa";
import {
  FaPhoneSquare,
  FaSearchLocation,
  FaLocationArrow,
} from "react-icons/fa";
// src={require(`../src/images/covers/${this.state.details.cover}.jpg`)}
const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <div className={contactStyles.contact}>
        <div className={contactStyles.text}>
          <h1>Contact Us</h1>
          <p className={contactStyles.phone}>
            <a href="tel: +38978708004">
              <FaPhoneSquare />
            </a>
            <a href="viber://contact?number=%2B38970620320">
              <FaViber className={contactStyles.viber} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=38978708004">
              <FaWhatsapp className={contactStyles.whatUp} />
            </a>
            &nbsp;+389 78 708 004
          </p>
          <p>
            <FaSearchLocation />
            &nbsp;str.Rade Jovcevski Korcagin 11
          </p>
          <p>
            <FaLocationArrow />
            &nbsp;Skopje - Macedonia
          </p>
        </div>
        <Iframe
          url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.2592849614466!2d21.442481032641428!3d41.994710654246944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x309377b0c6a08aa7!2z0KjQsNC90YLQuCDQpdC-0YHRgtC10LsgMQ!5e0!3m2!1sen!2smk!4v1562017120321!5m2!1sen!2smk"
          width="1200px"
          height="450"
          id="myId"
          className="myClassname"
          display="block"
          position="relative"
          styles={{ margin: "0 auto" }}
          className={contactStyles.map}
        />

        <img className={contactStyles.staff} src={Staff} alt="staff" />

        <p className={contactStyles.reach}>
          Reach us directy via&nbsp;
          <a href="mailto: hostelshanti@gmail.com">EMAIL</a>.
        </p>
      </div>
    </Layout>
  );
};

export default ContactPage;
