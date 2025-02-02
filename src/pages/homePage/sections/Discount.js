import React from "react";
import pic1 from "./../../../image/img/banner/banner01.jpg";
import pic2 from "./../../../image/img/banner/banner02.jpg";
import pic3 from "./../../../image/img/banner/banner03.jpg";
import pic4 from "./../../../image/img/banner/banner04.jpg";
import pic5 from "./../../../image/img/banner/banner05.jpg";
import Slider from "react-slick";
import NextArrow from "../../../ui/NextArrow";
import PreArrow from "../../../ui/PreArrow";

function Discount() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreArrow />,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
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
  return (
    <>
      <section className="d-flex flex-column align-items-center ">
        <h2 className="py-5">最新優惠</h2>
      </section>
      <div className="d-flex w-100 justify-content-center">
        <div className="col-9 col-md-10">
          <Slider {...settings}>
            <img alt="banner" src={pic1} />
            <img alt="banner" src={pic2} />
            <img alt="banner" src={pic3} />
            <img alt="banner" src={pic4} />
            <img alt="banner" src={pic5} />
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Discount;
