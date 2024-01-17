import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ toggleModal, activePhoto, photos, setActivePhoto, likes, setLikes }) => {


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button" onClick={() => setActivePhoto(false)}>
        <img src={closeSymbol} alt="close symbol" />
      </button>
      <PhotoFavButton likes={likes} setLikes={setLikes} photo={activePhoto} />
      <section className="photo-details-modal__images" >
        <img src={activePhoto.urls.full} alt="full" className="photo-details-modal__image" />
        <div className="photo-list__user-details">
          <img className="photo-details-modal__photographer-profile" src={activePhoto.user.profile} alt="profilephoto" />
          <div className="photo-details-modal__photographer-info">{activePhoto.user.name}
            <p className="photo-details-modal__photographer-location">{activePhoto.location.city}, {activePhoto.location.country}</p>
          </div>
        </div>
        <header className="photo-details-modal__header">Similar Photos</header>
        <PhotoList photos={photos} toggleModal={toggleModal} setActivePhoto={setActivePhoto} likes={likes} setLikes={setLikes} />
      </section>
    </div >
  );


};

export default PhotoDetailsModal;
