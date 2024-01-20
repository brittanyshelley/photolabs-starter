import { useReducer, useEffect } from 'react';


export const ACTIONS = {
  UPDATE_PHOTO_FAV: 'UPDATE_PHOTO_FAV',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS',
  SET_TOPIC: 'SET_TOPIC'
};


const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.UPDATE_PHOTO_FAV:
    return { ...state, likes: action.data };
  case ACTIONS.SELECT_PHOTO:
    return { ...state, activePhoto: action.data };
  case ACTIONS.CLOSE_MODAL:
    return { ...state, displayModal: !state.displayModal };
  case 'SET_PHOTO_DATA':
    return { ...state, photos: action.payload };
  case 'SET_TOPIC_DATA':
    return { ...state, topics: action.payload };
  case 'GET_PHOTOS_BY_TOPICS':
    return { ...state, photos: action.payload };
  case 'SET_TOPIC':
    return { ...state, topic: action.data };
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};
// Hook to manage state of application, includes functions to update state,
// fetch data from an API and return the state and functions for interacting with it
const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, {
    likes: [],
    displayModal: false,
    activePhoto: null,
    topics: [],
    photos: [],
    topic: null
  });

  const setActivePhoto = (data) => {
    dispatch({ type: ACTIONS.SELECT_PHOTO, data: data });
  };

  const setLikes = (data) => {
    dispatch({ type: ACTIONS.UPDATE_PHOTO_FAV, data: data });
  };

  const toggleModal = () => {
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_TOPIC, data: topicId });
  };

  useEffect(() => {
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    if (state.topic) {
      const url = `/api/topics/photos/${state.topic}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: data });
        })
        .catch((error) => {
          console.error(`Error fetching photos for topic ${state.topic}:`, error);
        });
    }
  }, [state.topic]);

  return {
    state,
    onPhotoSelect: setActivePhoto,
    updateToFavPhotoIds: setLikes,
    onClosePhotoDetailsModal: toggleModal,
    setTopic
  };
};

export default useApplicationData;