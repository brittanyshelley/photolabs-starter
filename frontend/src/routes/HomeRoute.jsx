import React, { useState } from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = ({ toggleModal, photos }) => {

  const [likes, setLikes] = useState(0);

  return (
    <div className="home-route">
      <TopNavigationBar likes={likes}/>
      <PhotoList toggleModal={toggleModal} likes={likes} setLikes={setLikes} photos={photos} />
    </div>
  );
};

export default HomeRoute;
