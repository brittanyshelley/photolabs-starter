import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = ({ photo }) => {
  const { urls, user, location } = photo;

  return (

    <div className="photo-list__item">
      <img className="photo-list__image" src={urls.regular} alt="photo" />
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="profilephoto" />
        <div className="photo-list__user-info">{user.name}<PhotoFavButton />
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
