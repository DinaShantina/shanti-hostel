import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import ReactBnbGallery from "react-bnb-gallery"
// import GalleryA from "react-photo-gallery"
import Allimages from "../components/allimages"
import photos from "../components/gallerylibrary"

const photosA = [
  {
    photo: "./images/allimg/1.jpg",
    caption: "8 bed dormitory",
    // thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
  },
  {
    photo: "./images/allimg/2.jpg",
    caption: "Private Double Room",
    // thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
  },
  {
    photo: "./images/allimg/3.jpg",
    caption: "4 bed dormitory",
    // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
  },
]

class Gallery extends Component {
  constructor() {
    super(...arguments)
    this.state = { galleryOpened: false, activePhotoPressed: 1 }
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
          <Allimages onClick={this.toggleGallery} />

          {/* <button onClick={this.toggleGallery}>Open photo gallery</button> */}

          <ReactBnbGallery
            show={this.state.galleryOpened}
            photos={photosA}
            onClose={this.toggleGallery}
            activePhotoPressed={this.state.activePhotoPressed}
          />
        </div>
      </Layout>
    )
  }
}

export default Gallery
