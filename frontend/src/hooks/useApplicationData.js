import { useReducer, useEffect } from 'react';
// import axios from 'axios';


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
    // console.log('UPDATE_PHOTO_FAV:', action.data);
    return ({ ...state, likes: action.data });
  case ACTIONS.SELECT_PHOTO:
    // console.log('SELECT_PHOTO:', action.data);
    return ({ ...state, activePhoto: action.data });
  case ACTIONS.CLOSE_MODAL:
    // console.log('CLOSE_MODAL');
    return ({ ...state, displayModal: !state.displayModal });
  case 'SET_PHOTO_DATA':
    console.log('SET_PHOTO_DATA:', action.payload);
    return { ...state, photos: action.payload };
  case 'SET_TOPIC_DATA':
    console.log('SET_TOPIC_DATA:', action.payload);
    return { ...state, topics: action.payload };
  case 'GET_PHOTOS_BY_TOPICS':
    console.log('GET_PHOTOS_BY_TOPICS:', action.payload);
    return { ...state, photos: action.payload };
  case 'SET_TOPIC':
    return { ...state, topic: action.data };
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
    photos: [],
    topic: null
  });
  // console.log(state);

  const setActivePhoto = (data) => {
    // console.log('setActivePhoto:', data);
    dispatch({ type: ACTIONS.SELECT_PHOTO, data: data });
  };

  const setLikes = (data) => {
    // console.log('setLikes:', data);
    dispatch({ type: ACTIONS.UPDATE_PHOTO_FAV, data: data });
  };

  const toggleModal = () => {
    // console.log('toggleModal');
    dispatch({ type: ACTIONS.CLOSE_MODAL });
  };

  const setTopic = (topicId) => {
    dispatch({ type: ACTIONS.SET_TOPIC, data: topicId });
  };

  useEffect(() => {
    // console.log('Fetching /api/photos');
    fetch("/api/photos")
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched /api/photos:', data);
        dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    // console.log('Fetching /api/topics');
    fetch("/api/topics")
      .then((response) => response.json())
      .then((data) => {
        // console.log('Fetched /api/topics:', data);
        dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data });
      });
  }, []);

  useEffect(() => {
    if (state.topic) {
      console.log(`Fetching photos for topic: ${state.topic}`);
      const url = `http://localhost:8001/api/topics/photos/${state.topic}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(`Fetched photos for topic ${state.topic}:`, data);
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
// const reducer = (state, action) => {
//   switch (action.type) {
//   case ACTIONS.UPDATE_PHOTO_FAV:
//     return ({ ...state, likes: action.data });
//   case ACTIONS.SELECT_PHOTO:
//     return ({ ...state, activePhoto: action.data });
//   case ACTIONS.CLOSE_MODAL:
//     return ({ ...state, displayModal: !state.displayModal });
//   case 'SET_PHOTO_DATA':
//     return { ...state, photos: action.payload };
//   case 'SET_TOPIC_DATA':
//     return { ...state, photos: action.payload };
//   // case ACTIONS.SET_TOPIC_DATA:
//   //   return ({ ...state, topics: action.payload });
//   case ACTIONS.GET_PHOTOS_BY_TOPICS:
//     return ({ ...state, photos: action.payload });
//   // case ACTIONS.SET_PHOTO_DATA:
//   //   return ({ ...state, photos: action.payload });
//   default:
//     throw new Error(
//       `Tried to reduce with unsupported action type: ${action.type}`
//     );
//   }
// };

// const useApplicationData = () => {


//   const [state, dispatch] = useReducer(reducer, {
//     likes: [],
//     displayModal: false,
//     activePhoto: null,
//     topics: [],
//     photos: []
//   });

//   const setActivePhoto = (data) => {
//     dispatch({ type: ACTIONS.SELECT_PHOTO, data: data });
//   };

//   const setLikes = (data) => {
//     dispatch({ type: ACTIONS.UPDATE_PHOTO_FAV, data: data });
//   };

//   const toggleModal = () => {
//     dispatch({ type: ACTIONS.CLOSE_MODAL });
//   };

//   useEffect(() => {
//     fetch("/api/photos")
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data }));
//   }, []);

//   useEffect(() => {
//     fetch("/api/topics")
//       .then((response) => response.json())
//       .then((data) => dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: data }));
//   }, []);

// React.useEffect(() => {
//   axios.get('http://localhost:8001/api/topics')
//     .then(res => {
//       console.log(res);
//       dispatch({ type: ACTIONS.SET_TOPIC_DATA, payload: res.data });
//     })
//     .catch(error => {
//       console.error('Error fetching topics:', error);
//     });
// }, []);

// React.useEffect(() => {
//   if (state.topic) {
//     // Construct the URL with the specific topic_id
//     const url = `http://localhost:8001/api/topics/photos/${state.topic}`;
//     axios.get(url)
//       .then(res => {
//         dispatch({ type: ACTIONS.GET_PHOTOS_BY_TOPICS, payload: res.data });
//       })
//       .catch(error => {
//         console.error('Error fetching photos by topic:', error);
//       });
//   } else {
//     axios.get('http://localhost:8001/api/photos')
//       .then(res => {
//         console.log(res);
//         dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: res.data });
//       })
//       .catch(error => {
//         console.error('Error fetching photos:', error);
//       });
//   }
// }, [state.topic]);

//   return {
//     state,
//     onPhotoSelect: setActivePhoto,
//     updateToFavPhotoIds: setLikes,
//     onClosePhotoDetailsModal: toggleModal
//   };
// };

export default useApplicationData;



// "GET_PHOTOS": http://localhost:8001/api/photos,
// "GET_TOPICS": http://localhost:8001/api/topics,
// “GET_PHOTOS_BY_TOPICS: http://localhost:8001/api/topics/photos/:topic_id,



