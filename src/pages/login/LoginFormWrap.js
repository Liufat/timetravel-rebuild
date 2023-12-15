import React from "react";
import styled from "styled-components";

const StyledSection = styled.section`
  background-color: var(--color-white);
  border-radius: var(--border-redius);

  @media screen and (min-width: 768px) {
    padding: 3rem 0rem;
  }
`;

function LoginFormWrap({ children }) {
  return (
    <StyledSection className="col-10 col-md-5 col-xl-4 d-flex justify-content-center align-items-center ">
      <div className="d-flex flex-column col-11 col-md-8 col-xl-7 gap-md-2">
        {children}
      </div>
    </StyledSection>
  );
}

export default LoginFormWrap;
