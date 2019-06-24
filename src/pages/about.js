import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <Layout>
      <Head title="About" />
      <h1>About Shanti Hostel</h1>
      <p>
        Shanti Hostel is a very nice, small and cozy place located in just 3
        minutes walking distance from the bus and train station and only 5
        minutes from the center of our city Skopje. Designed with much love and
        care, Shanti is a hostel where the backpackers meet in small groups and
        share the experience in one of the oldest neighborhood in Skopje. We are
        a couple who own and run this nice and warm hostel and we've been
        travelling a lot, so we know very well what a backpacker needs during
        the traveling. In every room for each bed we provided a safety lockers,
        reading lights, electricity plugs, colorful curtains. There is a
        beautiful and pleasant garden where you can relax and enjoy your moments
        in Shanti Hostel. Almost all the place is equipped with A/C and
        protected with camera security system. In the morning we serve a FREE
        BREAKFAST and there is FREE tea and coffee during your stay in the
        hostel. For our travellers we provide many activities such as
        airport,bus and train station pick up, horse riding tours, walking
        tours,thermal bath visits and many other interesting things. Near Shanti
        Hostel there are big super markets, restaurant, bars, clubs, theatre,
        swimming pool, shopping malls, change office and ATM . So we invite you
        to stay in our little and charming hostel and let us make your visit in
        Skopje unforgettable.
      </p>
      <p>
        <Link to="/contact">Contact us</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
