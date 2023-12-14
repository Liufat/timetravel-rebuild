import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import styled from "styled-components";

const StyledCartIcon = styled(FiShoppingCart)`
  cursor: pointer;
  width: 1.5rem;
`;
function CartIcon({ className }) {
  return <StyledCartIcon className={className} />;
}

export default CartIcon;
