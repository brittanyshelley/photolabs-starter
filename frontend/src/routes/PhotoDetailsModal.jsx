import React from 'react';

import '../styles/PhotoDetailsModal.scss';
import closeSymbol from '../assets/closeSymbol.svg';
import PhotoList from 'components/PhotoList';
import PhotoFavButton from 'components/PhotoFavButton';


const PhotoDetailsModal = ({ toggleModal, activePhoto, photos, setActivePhoto, likes, setLikes }) => {

  console.log(activePhoto);


  return (
    <div className="photo-details-modal">
      <button className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" onClick={()=>setActivePhoto(false)} />
      </button>
      <section className="photo-details-modal_images" >
        <PhotoFavButton likes={likes} setLikes={setLikes} photo={activePhoto}/>
        <img src={activePhoto.urls.full} alt="full" className="photo-details-modal_image" />
        <header className="photo-details-modal_header">Similar Photos</header>
        <PhotoList photos={photos} toggleModal={toggleModal} setActivePhoto={setActivePhoto} likes={likes} setLikes={setLikes} />
      </section>
    </div >
  );


};

export default PhotoDetailsModal;
