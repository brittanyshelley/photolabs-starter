import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";



const PhotoList = ({ photos, likes, setLikes, toggleModal, setActivePhoto }) => {
  const items = photos.map((photo, index) => (
    <PhotoListItem
      key={index}
      photo={photo}
      likes={likes}
      setLikes={setLikes}
      toggleModal={toggleModal}
      setActivePhoto={setActivePhoto}
    />
  ));

  return <ul className="photo-list">{items}</ul>;
};

export default PhotoList;
