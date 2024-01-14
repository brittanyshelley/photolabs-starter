import React from "react";

import "../styles/TopicListItem.scss";




const TopicListItem = ({ topic }) => {
  const { title } = topic;

  return (
    <div className="topic-list__item">
      {title}
    </div>
  );
};

export default TopicListItem;
