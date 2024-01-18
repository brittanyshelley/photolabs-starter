import React from 'react';

import HomeRoute from 'routes/HomeRoute';
import PhotoDetailsModal from 'routes/PhotoDetailsModal';
import './App.scss';
import useApplicationData from "./hooks/useApplicationData.js";


const App = () => {

  const {
    state,
    onPhotoSelect,
    updateToFavPhotoIds,
    setTopic,
    onClosePhotoDetailsModal,
  } = useApplicationData();


  return (
    <div className="App">
      <HomeRoute toggleModal={onClosePhotoDetailsModal} photos={state.photos} setActivePhoto={onPhotoSelect} likes={state.likes} setLikes={updateToFavPhotoIds} topics={state.topics} setTopic={setTopic} />
      {state.activePhoto && <PhotoDetailsModal toggleModal={onClosePhotoDetailsModal} photos={state.photos} activePhoto={state.activePhoto} setActivePhoto={onPhotoSelect} likes={state.likes} setLikes={updateToFavPhotoIds} topics={state.topics} />}
    </div>
  );
};

export default App;
