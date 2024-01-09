import React from "react";
import styled from "styled-components";
import CommentStar from "./CommentStar";
import productImg from "./../image/img/hotpot_home.jpeg";
import moment from "moment";

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

function Comment({ comment }) {
  const userImage = productImg;
  const {
    username: userName,
    score,
    commit_text: commentContent,
    create_time: createTime,
  } = comment;
  return (
    <StyledCommentCard className="d-flex flex-column gap-3 mt-3 pt-3">
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start align-items-center col-xl-4 gap-3">
          <StyledRoundImgWrap
            style={{ backgroundImage: `url(${userImage})` }}
            className="col-xl-3"
          />
          <div className="d-flex flex-column col-xl-8">
            <span>{userName}</span>
            <span>
              <CommentStar score={score} className="text-color-primary" />
            </span>
          </div>
        </div>
        <div>
          <span className="text-color-dark-grey">
            {moment(createTime).format("YYYY-MM-DD")}
          </span>
        </div>
      </div>
      <div>
        <p>{commentContent}</p>
      </div>
    </StyledCommentCard>
  );
}

export default Comment;
