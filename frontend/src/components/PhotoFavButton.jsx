import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ likes, setLikes, photo }) => {

  let isFavorited = false;
  if (Array.isArray(likes)) {
    isFavorited = likes.includes(String(photo.id));
  }

  const handleFavClick = () => {

    let newLikes = [...likes];
    if (isFavorited) {
      newLikes = newLikes.filter(id => id !== String(photo.id));
    } else {
      newLikes.push(String(photo.id));
    }
    setLikes(newLikes);
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleFavClick}>
      <FavIcon selected={isFavorited} /> {/* Pass the selected prop to determine the icon appearance */}
    </button>
  );
};

export default PhotoFavButton;