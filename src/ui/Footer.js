import React from "react";
import styled from "styled-components";
import footerLogo from "./../image/icon/logo/logo_white.svg";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const StyledFooter = styled.footer`
  height: 30rem;
  background-color: var(--color-grey);
`;

const StyledBorder = styled.div`
  padding-bottom: 3rem;
  border-bottom: 1px solid var(--color-white);
`;

const StyledIconWrap = styled.div`
  color: var(--color-white);
`;

function Footer() {
  return (
    <StyledFooter className="d-flex justify-content-center align-items-center">
      <div className="col-xl-8">
        <StyledBorder className="d-flex justify-content-between ">
          <div className="col-xl-2">
            <img alt="logo" className="w-100" src={footerLogo}></img>
          </div>
          <StyledIconWrap className="col-xl-1 d-flex justify-content-center gap-5">
            <h1>
              <FaFacebookF />
            </h1>
            <h1>
              <FaInstagram />
            </h1>
          </StyledIconWrap>
        </StyledBorder>
        <StyledIconWrap className="d-flex justify-content-between py-5 ">
          <div>
            <span>E-Mail：service@timetravel.com</span>
          </div>
          <div>
            <span>COPYRIGHT &copy; 2022 TimeTravel All rights reserved</span>
          </div>
        </StyledIconWrap>
      </div>
    </StyledFooter>
  );
}

export default Footer;
