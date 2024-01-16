import React from "react";

import "../styles/PhotoList.scss";
import PhotoListItem from "./PhotoListItem";




const PhotoList = (props) => {
  //photo would be assigned to the first object in the list (first arguement will be the first object, second arguement will be the index of that object in the array)
  const items = props.photos.map((photo, index) => <PhotoListItem key={index} photo={photo} likes={props.likes} setLikes={props.setLikes} toggleModal={props.toggleModal} setActivePhoto={props.setActivePhoto} />);

  return (
    <ul className="photo-list">
      {items}
    </ul>
  );
};

export default PhotoList;
