import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import headerStyles from "./header.module.scss"
// import Logo from "../logo.jpg"
// import { Navbar, Nav, Button, Form } from "react-bootstrap"
// import "../path_to/bootstrap.min.css"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <header className={headerStyles.header}>
      {/* <Link className={headerStyles.title} to="/">
        <img className={headerStyles.mainImage} src={Logo} />
      </Link> */}
    </header>
  )
}

export default Header
