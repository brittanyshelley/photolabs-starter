import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ toggleModal, regular, photos }) => {



  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={toggleModal} />
      </button>
      <section className="photo-details-modal_images" >
        <PhotoFavButton />
        {/* <img src={regular} alt="full" className="photo-details-modal_image" /> */}
        <header className="photo-details-modal_header">Similar Photos</header>
        <PhotoList photos={photos} />
      </section>
    </div >
  );


};

export default PhotoDetailsModal;
