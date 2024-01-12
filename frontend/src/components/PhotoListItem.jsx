import React from "react";

import "../styles/PhotoListItem.scss";



const PhotoListItem = ({ photo }) => {
  const { imageSource, profile, username, location } = photo;
  return (
    <div className="photo-list__item">
      <img className="photo-list__image" src={imageSource} alt="photo" />
      <img className="photo-list__image" src={profile} alt="profilephoto" />
      <p className="photo-list__user-info">{username}</p>
      <p className="photo-list__user-location">{location.city}, {location.country}</p>
    </div>
  );

};

export default PhotoListItem;
