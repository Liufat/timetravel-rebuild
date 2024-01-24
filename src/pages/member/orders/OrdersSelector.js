import React from "react";
import styled from "styled-components";

const StyledOrderSelect = styled.div`
  &.active {
    color: var(--color-primary);
    border-bottom: 5px solid var(--color-primary);
  }
`;

function OrdersSelector({ ordersSelected, setOrderSelected }) {
  return (
    <div className="d-flex justify-content-around my-4 py-3">
      {["近期訂單", "交易中訂單", "歷史訂單"].map((v) => (
        <StyledOrderSelect
          key={v}
          className={`${ordersSelected === v && "active"} pointer`}
          onClick={() => setOrderSelected(v)}
        >
          <h2>{v}</h2>
        </StyledOrderSelect>
      ))}
    </div>
  );
}

export default OrdersSelector;
