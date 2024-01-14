import React, {useState} from 'react';

import '../styles/HomeRoute.scss';
import TopNavigationBar from 'components/TopNavigationBar';
import PhotoList from 'components/PhotoList';


const HomeRoute = () => {

  const [likes, setLikes] = useState(0);

  return (
    <div className="home-route">
      <TopNavigationBar likes={likes}/>
      <PhotoList likes={likes} setLikes={setLikes}/>
    </div>
  );
};

export default HomeRoute;
