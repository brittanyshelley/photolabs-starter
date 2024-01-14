import React from 'react';

import HomeRoute from 'routes/HomeRoute';
// import PhotoList from './components/PhotoList';
// import TopNavigationBar from './components/TopNavigationBar';
import './App.scss';


// Note: Rendering a single component to build components in isolation


const App = () => {

  // const [likes, setLikes] = useState(0);


  return (
    <div className="App">
      <HomeRoute/>
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