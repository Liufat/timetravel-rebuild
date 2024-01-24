import React, { useState } from "react";
import styled from "styled-components";
import { GoTriangleDown } from "react-icons/go";

const Icon = styled.span`
  position: absolute;
  color: var(--color-black);
  transform: rotate(180deg);
  &.fold {
    transform: rotate(0);
  }
`;

const StyleAccordionWrap = styled.div`
  display: grid;
  transition: 0.2s;
  grid-template-rows: 1fr;
  &.fold {
    grid-template-rows: 0fr;
  }
`;

const StyleAccordionbody = styled.div`
  overflow: hidden;
`;

function Accordion({ surface, title, children }) {
  const [show, setShow] = useState(false);

  return (
    <>
      <div
        className={`d-flex py-3 border-bottom position-relative `}
        onClick={() => setShow(!show)}
      >
        <Icon className={`${show ? "" : "fold"}`}>
          <GoTriangleDown />
        </Icon>
        {surface.map((v) => (
          <p key={v} className={`col-${Math.floor(12 / surface.length)}`}>
            {v}
          </p>
        ))}
      </div>

      <StyleAccordionWrap
        className={`pb-3 ${show ? "border-bottom" : " fold"}`}
      >
        <StyleAccordionbody>
          <div className="d-flex justify-content-center py-3">
            {title.map((v) => (
              <p key={v} className={`col-${Math.floor(12 / title.length)}`}>
                {v}
              </p>
            ))}
          </div>
          {children}
        </StyleAccordionbody>
      </StyleAccordionWrap>
    </>
  );
}

export default Accordion;
