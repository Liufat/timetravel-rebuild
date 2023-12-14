import React from "react";
import styled from "styled-components";

const StyleButtonGreen = styled.button`
  border: none;
  background-color: var(--color-primary);
  color: var(--color-white);
`;

const StyleButtonTransparent = styled.button`
  background-color: transparent;
  border: 1px solid var(--color-white);
  color: var(--color-white);
`;

function Button({ type, className, children }) {
  if (type === "green") {
    return (
      <StyleButtonGreen className={className}>{children}</StyleButtonGreen>
    );
  }
  if (type === "transparent") {
    return (
      <StyleButtonTransparent className={className}>
        {children}
      </StyleButtonTransparent>
    );
  }
}

export default Button;
