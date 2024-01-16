import React, { useState} from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
// import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';
import photos from "./mocks/photos.js";


// Note: Rendering a single component to build components in isolation


const App = () => {

  const [likes, setLikes] = useState([]);
  const [displayModal, setDisplayModal] = useState(false);

  const toggleModal = () => {
    setDisplayModal(!displayModal);
  };

  const [activePhoto, setActivePhoto] = useState(false);

  return (
    <div className="App">
      <HomeRoute toggleModal={toggleModal} photos={photos} setActivePhoto={setActivePhoto} likes={likes} setLikes={setLikes} />
      {/* if displayModal is false then it wont show at all. If one side of && is false it won't display at all. reads left to right */}
      {activePhoto && <PhotoDetailsModal toggleModal={toggleModal} photos={photos} activePhoto={activePhoto} setActivePhoto={setActivePhoto} likes={likes} setLikes={setLikes} />}
      {/* <TopNavigationBar likes={likes}/>
      <PhotoList likes={likes} setLikes={setLikes}/> */}
    </div>
  );
};

export default App;

// const App = () => {
//   const photos = [...Array(3)];
//   const photoListItems = photos.map((photo, i) =>
//     <PhotoListItem key={i} photo={sampleDataForPhotoListItem} imageSource={sampleDataForPhotoListItem.imageSource}/>
//   );

//   return (
//     <div className="App">
//       {photoListItems}
//     </div>
//   );
// };