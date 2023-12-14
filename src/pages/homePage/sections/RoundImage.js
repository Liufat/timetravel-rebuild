import React from "react";
import pic1 from "./../../../image/img/itinerary_home.jpg";
import styled from "styled-components";
import RoundPictureCard from "../../../ui/RoundPictureCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const StyledSpan = styled.span`
  cursor: pointer;
`;

function RoundImage() {
  return (
    <section className="d-flex py-5 justify-content-center">
      <div className="d-flex py-5 col-xl-9 justify-content-evenly gap-5 gap-xl-0">
        <StyledSpan className="d-flex d-xl-none align-items-center">
          <FaChevronLeft />
        </StyledSpan>
        <RoundPictureCard pic={pic1} className="d-flex justify-content-center">
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard
          pic={pic1}
          className="d-none d-md-flex justify-content-center"
        >
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard
          pic={pic1}
          className="d-none d-md-flex justify-content-center"
        >
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard
          pic={pic1}
          className="d-none d-xl-flex justify-content-center"
        >
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard
          pic={pic1}
          className="d-none d-xl-flex justify-content-center"
        >
          防疫旅館
        </RoundPictureCard>
        <StyledSpan className="d-flex d-xl-none align-items-center">
          <FaChevronRight />
        </StyledSpan>
      </div>
    </section>
  );
}

export default RoundImage;
