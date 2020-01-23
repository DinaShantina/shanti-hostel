import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { FaFacebook, FaInstagram } from "react-icons/fa";

import footerStyle from "./footer.module.scss";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);

  let dateUpdate = new Date().getFullYear();
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.icons}>
        <a href="https://www.facebook.com/shantihostels/" target="__blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/shantihostel/" target="__blank">
          <FaInstagram />
        </a>
      </div>
      <p>
        Created by {data.site.siteMetadata.author}, &copy; {dateUpdate}
      </p>
    </footer>
  );
};
export default Footer;
