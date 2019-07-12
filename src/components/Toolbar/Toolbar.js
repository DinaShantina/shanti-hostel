import React from "react"
import toolbarStyle from "./Toolbar.module.scss"
import { Link } from "gatsby"
import DrawerToggleButton from "../SiderDrawer/DrawerToggleButton"
// import Logo from "../shanti.png"
import Logo from "../../shantiA.png"
import { FaFacebook, FaInstagram } from "react-icons/fa"

// import img1 from "../images/slides/slide1.jpg"

const Toolbar = props => {
  //   const logo = require("./shanti.png")
  return (
    <div className={toolbarStyle.toolbar}>
      <nav className={toolbarStyle.toolbarNav}>
        <div className={toolbarStyle.toolToggleButton}>
          <DrawerToggleButton click={props.drawerClickHandler} />
        </div>
        <div className={toolbarStyle.toolLogo}>
          <Link to="/" className={toolbarStyle.toologonav}>
            <img src={Logo} alt="logo" />
          </Link>
        </div>

        <div className={toolbarStyle.space} />
        <div className={toolbarStyle.toolItems}>
          <ul>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/about/"
              >
                About &nbsp;
              </Link>
            </li>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/booking/"
              >
                BOOKING &nbsp;
              </Link>
            </li>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/gallery/"
              >
                Gallery &nbsp;
              </Link>
            </li>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/blog"
              >
                Blog &nbsp;
              </Link>
            </li>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/contact"
              >
                Contact &nbsp;
              </Link>
            </li>
            <li>
              <Link
                className={toolbarStyle.navItem}
                activeClassName={toolbarStyle.activeNavItem}
                to="/booking"
              >
                <button className={toolbarStyle.one}>
                  <div className={toolbarStyle.insider}>BOOK NOW</div>
                </button>
              </Link>
            </li>
          </ul>
        </div>
        <div className={toolbarStyle.icons}>
          <a href="https://www.facebook.com/shantihostels/" target="__blank">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com/shantihostel/" target="__blank">
            <FaInstagram />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Toolbar
