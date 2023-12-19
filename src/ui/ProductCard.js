import React from "react";

import { FaStar } from "react-icons/fa";
import styled from "styled-components";

const StyledStar = styled(FaStar)`
  fill: var(--color-primary);
`;

const StyledImg = styled.div`
  height: 12rem;
  width: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const StyledSpan = styled.span`
  color: var(--color-primary);
  font-weight: 700;
`;

function ProductCard({ className = "", img, title, star, price }) {
  return (
    <div className={`${className} box-shadow`}>
      <StyledImg
        style={{ backgroundImage: `url(${img})` }}
        className="w-100"
        alt="banner"
        src={img}
      />
      <div className="d-flex flex-column gap-5  p-3">
        <div className="d-flex flex-column align-items-start justify-content-around">
          <span>[即買即用]</span>
          <span className="text-nowrap">{title}</span>
          <div className="d-flex align-items-center gap-1">
            <StyledStar />
            <span>{star}</span>
          </div>
        </div>

        <StyledSpan className="text-end">{price && `NT${price}`}</StyledSpan>
      </div>
    </div>
  );
}

export default ProductCard;
