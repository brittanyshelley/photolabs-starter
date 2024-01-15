import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = ({ photo, likes, setLikes, toggleModal }) => {
  const { urls, user, location } = photo;


  return (

    <div className="photo-list__item">
      <PhotoFavButton likes={likes} setLikes={setLikes}/>
      <img className="photo-list__image" src={urls.regular} alt="photo" onClick={toggleModal}/>
      <div className="photo-list__user-details">
        <img className="photo-list__user-profile" src={user.profile} alt="profilephoto" />
        <div className="photo-list__user-info">{user.name}
          <p className="photo-list__user-location">{location.city}, {location.country}</p>
        </div>
      </div>
    </div>
  );
};

export default PhotoListItem;
