import React, { useReducer } from 'react';
import axios from 'axios';


export const ACTIONS = {
  UPDATE_PHOTO_FAV: 'UPDATE_PHOTO_FAV',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL',
  GET_PHOTOS_BY_TOPICS: 'GET_PHOTOS_BY_TOPICS'
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.UPDATE_PHOTO_FAV:
    return ({ ...state, likes: action.data });
  case ACTIONS.SELECT_PHOTO:
    return ({ ...state, activePhoto: action.data });
  case ACTIONS.CLOSE_MODAL:
    return ({ ...state, displayModal: !state.displayModal });
  case ACTIONS.SET_TOPIC_DATA:
    return ({ ...state, topics: action.payload });
  case ACTIONS.GET_PHOTOS_BY_TOPICS:
    return ({ ...state, photos: action.payload });
  case ACTIONS.SET_PHOTO_DATA:
    return ({ ...state, photos: action.payload });
  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

const useApplicationData = () => {


  const [state, dispatch] = useReducer(reducer, {
    likes: [],
    displayModal: false,
    activePhoto: null,
    topics: [],
    photos: []
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


  React.useEffect(() => {
    axios.get('http://localhost:8001/api/topics')
      .then(res => {
        console.log(res);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data });
      })
      .catch(error => {
        console.error('Error fetching topics:', error);
      });
  }, []);

  React.useEffect(() => {
    if (state.topic) {
      // Construct the URL with the specific topic_id
      const url = `http://localhost:8001/api/topics/photos/${state.topic}`;
      axios.get(url)
        .then(res => {
          dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: res.data });
        })
        .catch(error => {
          console.error('Error fetching photos by topic:', error);
        });
    } else {
      axios.get('http://localhost:8001/api/photos')
        .then(res => {
          console.log(res);
          dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
        })
        .catch(error => {
          console.error('Error fetching photos:', error);
        });
    }
  }, [state.topic]);

  return {
    state,
    onPhotoSelect: setActivePhoto,
    updateToFavPhotoIds: setLikes,
    onClosePhotoDetailsModal: toggleModal
  };
};

export default useApplicationData;



// "GET_PHOTOS": http://localhost:8001/api/photos,
// "GET_TOPICS": http://localhost:8001/api/topics,
// “GET_PHOTOS_BY_TOPICS: http://localhost:8001/api/topics/photos/:topic_id,



