import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import ReactBnbGallery from "react-bnb-gallery"
// import Phone from "../phone.png"
// src={require(`../src/images/covers/${this.state.details.cover}.jpg`)}
const photos = [
  {
    photo: "../src/slide1.jpg",
    caption: "8 bed dormitory",
    // thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: "../images/slides/slide2.jpg",
    caption: "Private Double Room",
    // thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
  },
  {
    photo: "../images/slides/slide3.jpg",
    caption: "4 bed dormitory",
    // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
  },
]

class Gallery extends Component {
  constructor() {
    super(...arguments)
    this.state = { galleryOpened: true }
    this.toggleGallery = this.toggleGallery.bind(this)
  }

  toggleGallery() {
    this.setState(prevState => ({
      galleryOpened: !prevState.galleryOpened,
    }))
  }

  render() {
    return (
      <Layout>
        <Head title="Gallery" />
        <div>
          <button onClick={this.toggleGallery}>Open photo gallery</button>
          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photos}
            onClose={this.toggleGallery}
          />
        </div>
      </Layout>
    )
  }
}

export default Gallery
