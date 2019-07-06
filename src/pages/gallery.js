import React, { Component } from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import Gallery from "react-grid-gallery"
import IMAGES from "../components/allimg"

const GalleryA = () => {
  return (
    <Layout>
      <Head title="Gallery" />
      <Gallery
        images={IMAGES}
        enableLightbox={true}
        showLightboxThumbnails={true}
        margin={2}
        // maxRows={3}
        backdropClosesModal
        // currentImage={3}
        // isOpen={ true}
      />
    </Layout>
  )
}
export default GalleryA

//   return(
//   <div style={{
//     display: "block",
//     minHeight: "1px",
//     width: "100%",
//     border: "1px solid #ddd",
//     overflow: "auto",
//     textAlign: "center",
//     background: "white"
// }}>
//     <Gallery
//         images={this.state.images}
//         enableImageSelection={false}
//     />
// </div>

// const photosA = [
//   {
//     photo: "./images/allimg/1.jpg",
//     caption: "8 bed dormitory",
//     // thumbnail: "https://source.unsplash.com/aZjw7xI3QAA/100x67",
//   },
//   {
//     photo: "./images/allimg/2.jpg",
//     caption: "Private Double Room",
//     // thumbnail: "https://source.unsplash.com/c77MgFOt7e0/100x67",
//   },
//   {
//     photo: "./images/allimg/3.jpg",
//     caption: "4 bed dormitory",
//     // thumbnail: "https://source.unsplash.com/QdBHnkBdu4g/100x67",
//   },
// ]

// class Gallery extends Component {
//   constructor() {
//     super(...arguments)
//     this.state = { galleryOpened: false, activePhotoPressed: 1 }
//     this.toggleGallery = this.toggleGallery.bind(this)
//   }

//   toggleGallery() {
//     this.setState(prevState => ({
//       galleryOpened: !prevState.galleryOpened,
//     }))
//   }

//   render() {
//     return (
//       <Layout>
//         <Head title="Gallery" />
//         <div>
//           <Allimages onClick={this.toggleGallery} />

//           {/* <button onClick={this.toggleGallery}>Open photo gallery</button> */}

//           <ReactBnbGallery
//             show={this.state.galleryOpened}
//             photos={photosA}
//             onClose={this.toggleGallery}
//             activePhotoPressed={this.state.activePhotoPressed}
//           />
//         </div>
//       </Layout>
//     )
//   }
// }
