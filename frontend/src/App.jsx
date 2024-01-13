import React from 'react';

import TopicList from './components/TopicList';
import PhotoList from './components/PhotoList';
import './App.scss';


// Note: Rendering a single component to build components in isolation


const App = () => {

  return (
    <div className="App">
      <TopicList />
      <PhotoList />
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