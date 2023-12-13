import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import ProductCard from "../../../ui/ProductCard";
import pic1 from "./../../../image/img/hotpot_home.jpeg";

const StyledSpan = styled.span`
  cursor: pointer;
`;

function HotProduct() {
  return (
    <section className="d-flex flex-column align-items-center ">
      <h2 className="py-5">熱門商品</h2>
      <div className="d-flex col-10">
        <div className="d-flex justify-content-center align-items-center gap-4">
          <StyledSpan className="">
            <FaChevronLeft />
          </StyledSpan>
          {/* img, title, star, price */}
          <ProductCard
            className={"col-2"}
            img={pic1}
            title="台北兒童新樂園 | 一日票"
            star="4.9/5"
            price="499"
          />
          <ProductCard
            className={"col-2"}
            img={pic1}
            title="台北兒童新樂園 | 一日票"
            star="4.9/5"
            price="499"
          />{" "}
          <ProductCard
            className={"col-2"}
            img={pic1}
            title="台北兒童新樂園 | 一日票"
            star="4.9/5"
            price="499"
          />{" "}
          <ProductCard
            className={"col-2"}
            img={pic1}
            title="台北兒童新樂園 | 一日票"
            star="4.9/5"
            price="499"
          />
          <StyledSpan>
            <FaChevronRight />
          </StyledSpan>
        </div>
      </div>
    </section>
  );
}

export default HotProduct;
