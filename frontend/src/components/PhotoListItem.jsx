import React from "react";

import "../styles/PhotoListItem.scss";
import PhotoFavButton from "./PhotoFavButton";



const PhotoListItem = ({ photo, likes, setLikes, toggleModal, setActivePhoto }) => {
  const { urls, user, location } = photo;

  const handleClick = () => {
    toggleModal();
    setActivePhoto(photo);
  };

  return (

    <div className="photo-list__item">
      <PhotoFavButton likes={likes} setLikes={setLikes} photo={photo} />
      <img className="photo-list__image" src={urls.regular} alt="photo" onClick={handleClick} />
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
