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

  let yearUpdate = new Date().getFullYear();
  return (
    <footer className={footerStyle.footer}>
      <div className={footerStyle.icons}>
        <a href="https://www.facebook.com/shantihostels/" target="__blank">
          <FaFacebook />
        </a>
        <a href="https://www.instagram.com/shantihostelskopje/" target="__blank">
          <FaInstagram />
        </a>
      </div>
      <p>
        Created by {data.site.siteMetadata.author}, &copy; {yearUpdate}
      </p>
    </footer>
  );
};
export default Footer;
