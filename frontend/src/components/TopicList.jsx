import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";




const TopicList = (props) => {

  const topicList = props.topics.map((topics, index) => <TopicListItem key={index} topics={topics} setTopic={props.setTopic}/>);

  return (
    <div className="top-nav-bar__topic-list">
      {topicList}
    </div>
  );
};

export default TopicList;
