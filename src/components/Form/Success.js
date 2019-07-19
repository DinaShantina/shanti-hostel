import React, { Component } from "react";
import Layout from "../layout";
import Head from "../head";
import bookingStyle from "./booking.module.scss";
import Logo from "../../shantiA.png";
import { Link } from "gatsby";

class Success extends Component {
  // componentDidMount() {
  //   window.location.pathname = "/Success/";
  // }
  render() {
    return (
      <Layout>
        <Head title="Success" />
        <div className={bookingStyle.success}>
          <h1>Thank You For Your Reservation.</h1>
          <p>You will get an email with further instructions.</p>
          <Link to="/">Home</Link>
        </div>
        <Link to="/" className={bookingStyle.toologonav}>
          {/* Shanti Hostel */}
          <img src={Logo} alt="logo" />
        </Link>
      </Layout>
    );
  }
}

export default Success;
