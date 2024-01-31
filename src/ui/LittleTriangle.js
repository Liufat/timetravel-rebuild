import React from "react";
import { GoTriangleDown } from "react-icons/go";
import styled from "styled-components";

const Icon = styled.span`
  position: absolute;
  color: var(--color-black);
  transform: rotate(180deg);
  top: 25%;
  &.fold {
    transform: rotate(0);
  }
`;

function LittleTriangle({ show, className }) {
  return (
    <Icon className={`${className} ${show ? "" : "fold"}`}>
      <GoTriangleDown />
    </Icon>
  );
}

export default LittleTriangle;
