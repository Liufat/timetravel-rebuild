import React from "react";
import Breadcrumb from "./Breadcrumb";
import styled from "styled-components";
import { MY_HOST } from "../server/config";

import { CiHeart } from "react-icons/ci";
import { LuCalendarPlus } from "react-icons/lu";
import { FaRegStar, FaStar } from "react-icons/fa";

const StyledProductBanner = styled.div`
  width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`;

function ProductBanner({ type, image, name }) {
  return (
    <div>
      <div className="mt-4 d-flex flex-column gap-3">
        <Breadcrumb />
        <StyledProductBanner
          style={{
            backgroundImage: `url(${MY_HOST}/uploads/${type}/${image})`,
          }}
        />
        <div className="d-flex justify-content-between">
          <h2>{name}</h2>
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
    </div>
  );
}

export default ProductBanner;
