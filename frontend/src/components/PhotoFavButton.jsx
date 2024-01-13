import React, { useState } from 'react';
import FavIcon from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = () => {
  const [isFavourited, setIsFavourited] = useState(false);

  const handleFavClick = () => {
    setIsFavourited(!isFavourited); // Toggle the favourite state
  };

  return (
    <button className="photo-list__fav-icon" onClick={handleFavClick}>
      <FavIcon selected={isFavourited} /> {/* Pass the selected prop to determine the icon appearance */}
    </button>
  );
};

export default PhotoFavButton;