import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Head from "../components/head";
import Slideshow from "../components/slideshow";
import layoutStyle from "./contact.module.scss";
import Logo from "../logo.jpg";
import { FaViber, FaWhatsapp } from "react-icons/fa";

class IndexPage extends React.Component {
  constructor() {
    super();
    this.state = {
      intervalId: 0,
    };
  }
  scrollStep() {
    if (window.pageYOffset === 0) {
      clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
  logoA;
  scrollToTop() {
    let intervalId = setInterval(
      this.scrollStep.bind(this),
      this.props.delayInMs
    );
    this.setState({ intervalId: intervalId });
  }
  render() {
    return (
      <Layout>
        <Head title="Home" />
        <div className={layoutStyle.logoFirst}>
          <img src={Logo} alt="logo" />
        </div>
        {/* <div className={layoutStyle.logo}>
          <img src={Logo} alt="logo" />
        </div> */}
        <Slideshow className={layoutStyle.padx} />
        <div className={layoutStyle.whats}>
          <div className={layoutStyle.icon}>
            <a href="viber://contact?number=%2B38970620320">
              <FaViber className={layoutStyle.viber} />
            </a>
            <a href="https://api.whatsapp.com/send?phone=38978708004">
              <FaWhatsapp className={layoutStyle.viber} />
            </a>
          </div>
          <div className={layoutStyle.book}>
            <p>BOOK WITH VIBER OR WHATSAPP</p>
            <p>+389 78 708 004</p>
            <p>EASY, FAST &amp; WITH -10% DISCOUNT</p>
          </div>
        </div>
        <div className={layoutStyle.bgCollage}></div>
        <div className={layoutStyle.accom}>
          <p>
            Do you need accommodation? <br />
            <Link to="/contact" className={layoutStyle.linkClick}>
              CONTACT US
            </Link>
          </p>
          <div className={layoutStyle.logoA}>
            <img
              onClick={() => {
                this.scrollToTop();
              }}
              src={Logo}
              alt="logo"
            />
          </div>
        </div>
      </Layout>
    );
  }
}

export default IndexPage;
