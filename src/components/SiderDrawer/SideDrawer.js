import React from "react"
import { Link } from "gatsby"
import "./SideDrawer.css"
import Logo from "../../shantiA.png"

const SideDrawer = props => {
  let drawerClasses = "side"
  if (props.show) {
    drawerClasses = "side open"
  }
  return (
    <div className={drawerClasses}>
      {/* <div>
        <p>X</p>
      </div> */}
      <ul>
        <li>
          <Link to="/">
            {/* Shanti Hostel */}
            <img src={Logo} alt="logo" className="logos" />
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/about/">
            About &nbsp;
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/booking/">
            BOOKING &nbsp;
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/gallery/">
            Gallery &nbsp;
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/blog">
            Blog &nbsp;
          </Link>
        </li>
        <li>
          <Link className="nav-item" to="/contact">
            Contact &nbsp;
          </Link>
        </li>
        {/* <li>
              <Link
                className={sideStyle.navItem}
                activeClassName={sideStyle.activeNavItem}
                to="/booking"
              >
                <button> BOOK NOW</button>
              </Link>
            </li> */}
      </ul>
    </div>
  )
}

export default SideDrawer
