import React from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = ({ likes, setLikes, photo }) => {
  //
  const isFavorited = likes.includes(String(photo.id));

  const handleFavClick = () => {
    // isFavourited ? setLikes(likes - 1) : setLikes(likes + 1);
    setLikes(prev => {
      let newLikes = [...prev];
      if (isFavorited) {
        newLikes = newLikes.filter(id => id !== String(photo.id));
      } else {
        newLikes.push(String(photo.id));
      }
      return newLikes;
    });
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleFavClick}>
      <FavIcon selected={isFavorited} /> {/* Pass the selected prop to determine the icon appearance */}
    </button>
  );
};

export default PhotoFavButton;