import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import photos from "./mocks/photos.js";
import useApplicationData from "./hooks/useApplicationData.js";


const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    onLoadTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute toggleModal={onClosePhotoDetailsModal} photos={photos} setActivePhoto={onPhotoSelect} likes={state.likes} setLikes={updateToFavPhotoIds} />
      {/* if displayModal is false then it wont show at all. If one side of && is false it won't display at all. reads left to right */}
      {state.activePhoto && <PhotoDetailsModal toggleModal={onClosePhotoDetailsModal} photos={photos} activePhoto={state.activePhoto} setActivePhoto={onPhotoSelect} likes={state.likes} setLikes={updateToFavPhotoIds} />}
    </div>
  );
};

export default App;
