import React from "react";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

function CommentStar({ score, className, onClick }) {
  // score 0~5

  const roundScore = score < 6 && score >= 0 ? Math.round(score) : 0;
  const hightestScoreArray = new Array(5).fill("");

  return (
    <>
      {hightestScoreArray.map((v, i) => {
        if (i < roundScore) {
          return <FaStar className={className} key={i} onClick={onClick} />;
        } else {
          return <FaRegStar className={className} key={i} onClick={onClick} />;
        }
      })}
    </>
  );
}

export default CommentStar;
