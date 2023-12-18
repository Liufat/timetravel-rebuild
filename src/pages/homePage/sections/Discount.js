import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import pic1 from "./../../../image/img/banner/banner01.jpg";
import pic2 from "./../../../image/img/banner/banner02.jpg";
import pic3 from "./../../../image/img/banner/banner03.jpg";
import styled from "styled-components";

const StyledSpan = styled.span`
  cursor: pointer;
`;

function Discount() {
  return (
    <section className="d-flex flex-column align-items-center ">
      <h2 className="py-5">最新優惠</h2>
      <div className="d-flex col-md-10 col-xl-12">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <StyledSpan className="h-100 col-1 d-flex align-items-center justify-content-center">
            <FaChevronLeft />
          </StyledSpan>
          <div className="d-flex">
            <div className="d-flex gap-3 justify-content-center">
              <img
                className="col-8 col-md-5 col-xl-4"
                alt="banner"
                src={pic1}
              />
              <img
                className="d-none d-md-block col-md-5 col-xl-4"
                alt="banner"
                src={pic2}
              />
              <img
                className="d-none d-xl-block col-xl-4"
                alt="banner"
                src={pic3}
              />
            </div>
          </div>
          <StyledSpan className="h-100 col-1 d-flex align-items-center justify-content-center">
            <FaChevronRight />
          </StyledSpan>
        </div>
      </div>
    </section>
  );
}

export default Discount;
