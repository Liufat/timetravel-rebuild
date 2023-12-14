import React from "react";
import styled from "styled-components";

const StyledRoundImgWrap = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function RoundPictureCard({ className, pic, children }) {
  return (
    <div className={className}>
      <div className="d-flex flex-column align-items-center gap-3">
        <StyledRoundImgWrap style={{ backgroundImage: `url(${pic})` }} />
        <span>{children}</span>
      </div>
    </div>
  );
}

export default RoundPictureCard;
