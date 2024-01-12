import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ photo }) => {
  const { imageSource, profile, username, location } = photo;
  return (
    <div>
      <img src={imageSource} alt="photo" />
      <img src={profile} alt="profilephoto" />
      <p>{username}</p>
      <p>{location.city}, {location.country}</p>
    </div>
  );

};

export default PhotoListItem;
