import React from "react";
import styled from "styled-components";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--color-primary);
  &:disabled {
    color: var(--color-grey);
  }
`;

function TicketCount({ className, minus, plus, quantity }) {
  return (
    <div
      className={`d-flex justify-content-center gap-5 align-items-center ${className}`}
    >
      <StyledButton onClick={minus} disabled={quantity === 1}>
        <h2>
          <FaMinusCircle />
        </h2>
      </StyledButton>
      <h2 className="pt-1">{quantity}</h2>
      <StyledButton onClick={plus}>
        <h2>
          <FaCirclePlus className="text-color-primary" />
        </h2>
      </StyledButton>
    </div>
  );
}

export default TicketCount;
