import React from "react";

import { FaChevronRight } from "react-icons/fa";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "flex" }}
    >
      <h2>
        <FaChevronRight />
      </h2>
    </div>
  );
}

export default NextArrow;
