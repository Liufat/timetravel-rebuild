import React from "react";
import { useCartPage } from "../../context/CartPageContext";
import styled from "styled-components";

const StyleDiv = styled.div`
  position: relative;
  cursor: pointer;
  &.active {
    color: var(--color-primary);
  }
  &:not(:last-child) {
    &::after {
      color: var(--color-black);
      cursor: default;
      content: ">";
      position: absolute;
      top: 25%;
      right: -2rem;
      font-size: var(--font-size-h2);
      @media screen and (min-width: 1200px) {
        font-size: var(--font-size-xl-h2);
        top: 8%;
      }
    }
  }
`;

function CartHeader() {
  const { cartPageState, selectPage } = useCartPage();

  const createDom = () =>
    cartPageState.allPages.map((v, i) => {
      return (
        <StyleDiv key={v} className={i === cartPageState.nowPage && "active"}>
          <h2
            onClick={() => {
              selectPage(i);
            }}
          >
            {v}
          </h2>
        </StyleDiv>
      );
    });
  return (
    <div className="py-5 d-flex justify-content-center gap-5">
      {createDom()}
    </div>
  );
}

export default CartHeader;
