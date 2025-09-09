import React from "react";
import "./card.css";
const Card = ({ image }) => {
  const tags = image.tags.split(",");
  return (
    <div className="card">
      <img src={image.webformatURL} alt="" className="img" />
      <div className="contain">
        <div className="title">Photo by {image.user}</div>
        <ul className="list">
          <li>
            <strong>Views: </strong>
            {image.views}
          </li>
          <li>
            <strong>Downloads: </strong>
            {image.downloads}
          </li>
        </ul>
      </div>
      <div className="tag">
        {tags..slice(0, 3).map((tag, index) => (
          <span key={index} className="temp">
            #{tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Card;
