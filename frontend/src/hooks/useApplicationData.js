import { useState } from 'react';

const useApplicationData = () => {

  const [state, setState] = useState({

    likes: [],
    displayModal: false,
    activePhoto: null

  });

  const setActivePhoto = (data) => {
    setState({ ...state, activePhoto: data });
  };

  const setDisplayModal = (data) => {
    setState({ ...state, displayModal: data });
  };
  const setLikes = (data) => {
    setState({ ...state, likes: data });
  };

  const toggleModal = () => {
    setState({ ...state, displayModal: !state.displayModal });
  };
  
  return {
    state: state,
    onPhotoSelect: setActivePhoto,
    updateToFavPhotoIds: setLikes,
    onLoadTopic: null,
    onClosePhotoDetailsModal: toggleModal
  };
};

export default useApplicationData;
