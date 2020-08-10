import "./ImageList.css";
import React from "react";

import ImageCard from "./ImageCard";

const ImageList = ({ images }) => {
  const imagesList = images.map((image, index) => {
    return <ImageCard image={image} key={image.id}></ImageCard>;
  });

  return (
    <div>
      {images.length ? <h1>Found {images.length} images</h1> : ""}
      <div className="image-list">{imagesList}</div>
    </div>
  );
};

export default ImageList;
