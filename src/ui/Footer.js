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
  border-bottom: 1px solid var(--color-white);
`;

function Footer() {
  return (
    <StyledFooter className="d-flex justify-content-center align-items-center">
      <div className="mx-4 mx-xl-0 col-xl-8">
        <StyledBorder className="d-flex flex-column flex-xl-row justify-content-between align-items-center pb-3 pb-xl-5 ">
          <div className="col-8 col-xl-2">
            <img alt="logo" className="w-100" src={footerLogo}></img>
          </div>
          <div className="d-xl-none text-color-white pt-3">
            <span>E-Mail：service@timetravel.com</span>
          </div>
          <div className="d-none d-xl-flex col-xl-1 justify-content-center gap-5 text-color-white">
            <h1>
              <FaFacebookF />
            </h1>
            <h1>
              <FaInstagram />
            </h1>
          </div>
        </StyledBorder>
        <div className="d-flex flex-column flex-xl-row justify-content-between pt-3 pt-xl-5 text-color-white">
          <div className="d-none d-xl-block">
            <span>E-Mail：service@timetravel.com</span>
          </div>
          <div className="d-flex d-xl-none  col-xl-1 justify-content-center gap-3 gap-xl-5 text-color-white">
            <h1>
              <FaFacebookF />
            </h1>
            <h1>
              <FaInstagram />
            </h1>
          </div>
          <div className="text-center text-xl-start">
            <span>COPYRIGHT &copy; 2022 TimeTravel All rights reserved</span>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
