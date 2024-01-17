import { useReducer, useEffect } from 'react';


export const ACTIONS = {
  UPDATE_PHOTO_FAV: 'UPDATE_PHOTO_FAV',
  SET_PHOTO_DATA: 'SET_PHOTO_DATA',
  SET_TOPIC_DATA: 'SET_TOPIC_DATA',
  SELECT_PHOTO: 'SELECT_PHOTO',
  CLOSE_MODAL: 'CLOSE_MODAL'
};



const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.UPDATE_PHOTO_FAV:
    return ({ ...state, likes: action.data });
  case ACTIONS.SELECT_PHOTO:
    return ({ ...state, activePhoto: action.data });
  case ACTIONS.CLOSE_MODAL:
    return ({ ...state, displayModal: !state.displayModal });
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
    activePhoto: null

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

  return {
    state: state,
    onPhotoSelect: setActivePhoto,
    updateToFavPhotoIds: setLikes,
    // onLoadTopic: setTopic,
    onClosePhotoDetailsModal: toggleModal
  };
};

export default useApplicationData;







// const initialState = {
//   photos: [],
//   topics: [],
//   likes: {},
//   photo: null,
//   topic: null,
//   favPhoto: false
// };
// const [state, dispatch] = useReducer(reducer, initialState);

// useEffect(() => {
//   axios.get('http://localhost:8001/api/topics')
//     .then(res => {
//       dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data });
//     })
//     .catch(error => {
//       console.error('Error fetching topics:', error);
//     });
// }, []);

// useEffect(() => {
//   if (state.topic) {
//     axios.get(`http://localhost:8001/api/topics/photos/${state.topic}`)
//       .then(res => {
//         dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: res.data });
//       })
//       .catch(error => {
//         console.error('Error fetching photos by topic:', error);
//       });
//   } else {
//     axios.get('http://localhost:8001/api/photos')
//       .then(res => {
//         dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
//       })
//       .catch(error => {
//         console.error('Error fetching photos:', error);
//       });
//   }
// }, [state.topic]);

// return { state, dispatch, ACTIONS };
// }

// export default useApplicationData;
