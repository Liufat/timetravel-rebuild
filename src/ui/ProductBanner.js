import React from "react";
import Breadcrumb from "./Breadcrumb";
import styled from "styled-components";

import { CiHeart } from "react-icons/ci";
import { LuCalendarPlus } from "react-icons/lu";
import { FaRegStar, FaStar } from "react-icons/fa";

const StyledProductBanner = styled.div`
  width: 100%;
  height: 20vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`;

function ProductBanner({ image }) {
  return (
    <banner>
      <div className="mt-4 d-flex flex-column gap-3">
        <Breadcrumb />
        <StyledProductBanner
          style={{ backgroundImage: `url(${image})` }}
        />
        <div className="d-flex justify-content-between">
          <h2>50嵐 | (三和店)</h2>
          <div className="d-flex gap-5">
            <h2>
              <CiHeart />
            </h2>
            <h2>
              <LuCalendarPlus />
            </h2>
          </div>
        </div>
        <div className="d-flex flex-column gap-3">
          <h2 className="d-flex align-items-center">
            <FaStar className="text-color-primary" />
            <FaStar className="text-color-primary" />
            <FaStar className="text-color-primary" />
            <FaStar className="text-color-primary" />
            <FaRegStar className="text-color-primary" />
            4.3顆星
          </h2>
        </div>
      </div>
    </banner>
  );
}

export default ProductBanner;
