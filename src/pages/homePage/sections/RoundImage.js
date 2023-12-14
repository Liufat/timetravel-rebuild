import React from "react";
import pic1 from "./../../../image/img/itinerary_home.jpg";
import styled from "styled-components";
import RoundPictureCard from "../../../ui/RoundPictureCard";

function RoundImage() {
  return (
    <section className="d-flex py-5 justify-content-center">
      <div className="d-flex py-5 col-xl-9 justify-content-evenly">
        <RoundPictureCard pic={pic1} className="d-flex justify-content-center">
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard pic={pic1} className="d-flex justify-content-center">
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard pic={pic1} className="d-flex justify-content-center">
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard pic={pic1} className="d-flex justify-content-center">
          防疫旅館
        </RoundPictureCard>
        <RoundPictureCard pic={pic1} className="d-flex justify-content-center">
          防疫旅館
        </RoundPictureCard>
      </div>
    </section>
  );
}

export default RoundImage;
