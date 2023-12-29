import React from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledCommentCard = styled.div`
  border-top: 1px solid var(--color-grey);
`;

const StyledRoundImgWrap = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function Comment({ userImage }) {
  return (
    <StyledCommentCard className="d-flex flex-column gap-3 mt-3 pt-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start align-items-center col-xl-4 gap-3">
          <StyledRoundImgWrap
            style={{ backgroundImage: `url(${userImage})` }}
            className="col-xl-3"
          />
          <div className="d-flex flex-column col-xl-8">
            <span>花花</span>
            <span>
              <FaStar className="text-color-primary" />
              <FaStar className="text-color-primary" />
              <FaStar className="text-color-primary" />
              <FaStar className="text-color-primary" />
              <FaRegStar className="text-color-primary" />
            </span>
          </div>
        </div>
        <div>
          <span className="text-color-dark-grey">2022/10/22</span>
        </div>
      </div>
      <div>
        <p>
          評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論
        </p>
      </div>
    </StyledCommentCard>
  );
}

export default Comment;
