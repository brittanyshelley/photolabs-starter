import React from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = (props) => {

  const { toggleModal, photos, setActivePhoto, likes, setLikes, topics, setTopic } = props;

  return (
    <div className="home-route">
      <TopNavigationBar likes={likes} topics={topics} setTopic={setTopic}/>
      <PhotoList toggleModal={toggleModal} likes={likes} setLikes={setLikes} photos={photos} setActivePhoto={setActivePhoto} />
    </div>
  );
};

export default HomeRoute;
