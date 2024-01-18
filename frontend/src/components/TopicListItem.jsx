import React from "react";

import "../styles/TopicListItem.scss";




const TopicListItem = ({ topics, setTopic }) => {
  const { title, id } = topics;

  return (
    <div style={{cursor: "pointer"}} className="topic-list__item" onClick={() => setTopic(id)}>
      {title}
    </div>
  );
};

export default TopicListItem;
