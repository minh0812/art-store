import React from "react";
import Title from "../../components/Title";
import Gallery from "../../modules/gallery";

const GalleryPage = () => {
  return (
    <>
      <Title
        title="Gallery"
        items={[
          { content: "home", link: "/" },
          { content: "gallery", link: "/gallery" },
        ]}
      />
      <Gallery />
    </>
  );
};

export default GalleryPage;
