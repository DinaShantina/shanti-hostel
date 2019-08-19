import React from "react";
import Layout from "../components/layout";
import Head from "../components/head";
import Gallery from "react-grid-gallery";
import IMAGES from "../components/allimg";
import galleryStyle from "../components/imga.module.scss";

const GalleryA = () => {
  const images = IMAGES;
  return (
    <Layout>
      <Head title="Gallery" />
      <div className={galleryStyle.gallery}>
        {images.length && (
          <Gallery
            images={images}
            enableLightbox={true}
            showLightboxThumbnails={true}
            margin={2}
            backdropClosesModal
            // currentImage={3}
            // isOpen={ true}
          />
        )}
      </div>
    </Layout>
  );
};
export default GalleryA;
