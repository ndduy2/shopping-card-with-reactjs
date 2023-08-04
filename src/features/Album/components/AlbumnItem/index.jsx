import React from "react";
import PropTypes from "prop-types";
import "./style.css";

function AlbumnItem(props) {
  const { item } = props;

  return (
    <div className="albumn-item">
      <div className="albumn-item-img">
        <img src={item.imageUrl} alt={item.imageUrl} />
      </div>
      <p className="albumn-item-title">{item.title}</p>
    </div>
  );
}

export default AlbumnItem;
