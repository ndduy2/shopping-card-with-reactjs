import React from "react";
import PropTypes from "prop-types";
import AlbumnItem from "../AlbumnItem";
import "./style.css";

AlbumnList.propTypes = {};

function AlbumnList(props) {
  const { list } = props;
  return (
    <div className="albumn-list">
      {list.map((item) => (
        <li key={item.id}>
          <AlbumnItem item={item} />
        </li>
      ))}
    </div>
  );
}

export default AlbumnList;
