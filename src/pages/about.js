import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"
import blogStyles from "./blogs.module.scss"
import Hoscar from "../HoscarSlide.jpg"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <div className={blogStyles.hoscar}>
        <img src={Hoscar} className={blogStyles.hoscar} />
      </div>
      <div className={blogStyles.aboutStyle}>
        <div className={blogStyles.header}>
          <h1 className={blogStyles.animac}>Backpacker's</h1>
          <h1>HOSTEL</h1>
          <h1>in Skopje</h1>
        </div>
        <p className={blogStyles.text}>
          Shanti Hostel is a very nice, small and cozy place located in just 3
          minutes walking distance from the bus and train station and only 5
          minutes from the center of our city Skopje. <br /> <br />
          Designed with much love and care, Shanti is a hostel where the
          backpackers meet in small groups and share the experience in one of
          the oldest neighborhood in Skopje.
          <br /> <br /> We are a couple and brother who own and run this nice
          and warm hostel and we've been travelling a lot, so we know very well
          what a backpacker needs during the traveling. <br /> <br /> In every
          room for each bed we provided a safety lockers, reading lights,
          electricity plugs, colorful curtains. There is a beautiful and
          pleasant garden where you can relax and enjoy your moments in Shanti
          Hostel. Almost all the place is equipped with A/C and protected with
          camera security system. In the morning we serve a FREE BREAKFAST and
          there is FREE tea and coffee during your stay in the hostel.
          <br /> <br /> For our travellers we provide many activities such as
          airport,bus and train station pick up, horse riding tours, walking
          tours and many other interesting things. Near Shanti Hostel there are
          big super markets, restaurant, bars, clubs, theatre, swimming pool,
          shopping malls, change office and ATM.
          <br /> <br /> So we invite you to stay in our little and charming
          hostel and let us make your visit in Skopje unforgettable.
          <br /> <br />
          <div className={blogStyles.since}>
            <p>Dina Damjanovikj</p>
            <p>Petar Shevchenko</p>
            <p>Marjan Damjanovikj</p>
          </div>
        </p>
        <p>
          <Link to="/contact">Contact us</Link>
        </p>
      </div>
    </Layout>
  )
}

export default AboutPage
