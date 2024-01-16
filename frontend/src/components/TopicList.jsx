import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";
import topics from "../mocks/topics.js";



const TopicList = () => {

  const topicList = topics.map((topic, index) => <TopicListItem key={index} topic={topic} />);

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
