import React, { useState } from "react";

const QuestionsContainer = (props) => {
  const [activeQ, setActiveQ] = useState(null);

  const onTitleClick = (index) => {
    if (activeQ == index) {
      setActiveQ(-1);
    } else setActiveQ(index);
  };

  const renderItems = props.items.map((item, index) => {
    return (
      <React.Fragment key={item.title}>
        <div className="title active" onClick={() => onTitleClick(index)}>
          <i className="dropdown icon"></i>
          {item.title}
        </div>

        {activeQ !== index ? null : (
          <div className="content active">
            <p>{item.content}</p>
          </div>
        )}
      </React.Fragment>
    );
  });

  return <div className="ui styled accordion">{renderItems}</div>;
};

export default QuestionsContainer;
