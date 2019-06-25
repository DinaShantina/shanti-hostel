import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/index.scss"
import layoutStyle from "./layout.module.scss"
import Toolbar from "./Toolbar/ToOlbar.js"
import SideDrawer from "./SiderDrawer/SideDrawer"
import Backdrop from "./Backdrop/Backdrop"

class Layout extends React.Component {
  state = {
    siderDrawerOpen: false,
  }
  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { siderDrawerOpen: !prevState.siderDrawerOpen }
    })
  }
  backdropClickHandler = () => {
    this.setState({ siderDrawerOpen: false })
  }
  render() {
    let backdrop
    if (this.state.siderDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
      <div className={layoutStyle.all}>
        <div className={layoutStyle.container}>
          <Header />
          <Toolbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.siderDrawerOpen} />
          {backdrop}

          <main>
            <div className={layoutStyle.content}>{this.props.children}</div>
          </main>
          <Footer />
        </div>
      </div>
    )
  }
}

export default Layout
