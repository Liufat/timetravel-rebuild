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
      <div className="d-flex col-xl-11">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <StyledSpan className="">
            <FaChevronLeft />
          </StyledSpan>
          <img className="col-xl-3" alt="banner" src={pic1} />
          <img className="col-xl-3" alt="banner" src={pic2} />
          <img className="col-xl-3" alt="banner" src={pic3} />
          <StyledSpan>
            <FaChevronRight />
          </StyledSpan>
        </div>
      </div>
    </section>
  );
}

export default Discount;
