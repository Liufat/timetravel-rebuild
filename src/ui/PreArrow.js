import React from "react";
import { FaChevronLeft } from "react-icons/fa";

function PreArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{ ...style, display: "flex" }}
    >
      <h2>
        <FaChevronLeft />
      </h2>
    </div>
  );
}

export default PreArrow;
