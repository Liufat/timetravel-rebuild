import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import ProductCard from "./ProductCard";
const StyledSpan = styled.span`
  cursor: pointer;
`;

function ProductRecommend({ image }) {
  return (
    <div className="container d-none d-xl-block my-5">
      <div className="row">
        <section className="d-flex flex-column gap-5">
          <h2>更多美食推薦</h2>
          <div className="d-flex justify-content-between align-items-center gap-4">
            <StyledSpan>
              <FaChevronLeft />
            </StyledSpan>
            <ProductCard
              className={"col-xl-2"}
              img={image}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              className={"col-xl-2"}
              img={image}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              className={"col-xl-2"}
              img={image}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              className={"col-xl-2"}
              img={image}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              className={"col-xl-2"}
              img={image}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <StyledSpan>
              <FaChevronRight />
            </StyledSpan>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductRecommend;
