import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useCart } from "../context/CartContext";

const StyledCartIcon = styled(FiShoppingCart)`
  cursor: pointer;
  width: 1.5rem;
`;

const StyledCount = styled.div`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;
  background-color: var(--color-primary);
  height: 1.3rem;
  width: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  color: var(--color-white);
`;
function CartIcon({ className }) {
  const { cartState } = useCart();

  return (
    <NavLink to={"/cart"} className={`position-relative ${className}`}>
      <StyledCartIcon className="h-100" />
      {cartState.totalItems !== 0 && (
        <StyledCount>
          <p>{cartState.totalItems}</p>
        </StyledCount>
      )}
    </NavLink>
  );
}

export default CartIcon;
