import React from "react";
import pic1 from "./../../../image/img/itinerary_home.jpg";

import RoundPictureCard from "../../../ui/RoundPictureCard";

import Slider from "react-slick";
import NextArrow from "../../../ui/NextArrow";
import PreArrow from "../../../ui/PreArrow";
const settings = {
  arrows: true,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  nextArrow: <NextArrow />,
  prevArrow: <PreArrow />,
  responsive: [
    {
      breakpoint: 1030,
      settings: {
        slidesToShow: 5,
      },
    },
    {
      breakpoint: 770,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 430,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

function RoundImage() {
  return (
    <section className="w-100 py-5">
      <div className="d-flex w-100 justify-content-center">
        <div className="col-9 col-md-10">
          <Slider {...settings}>
            <RoundPictureCard pic={pic1}>防疫旅館</RoundPictureCard>
            <RoundPictureCard pic={pic1}>防疫旅館</RoundPictureCard>
            <RoundPictureCard pic={pic1}>防疫旅館</RoundPictureCard>
            <RoundPictureCard pic={pic1}>防疫旅館</RoundPictureCard>
            <RoundPictureCard pic={pic1}>防疫旅館</RoundPictureCard>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default RoundImage;
