import React from "react";
import ProductCard from "../../../ui/ProductCard";
import pic1 from "./../../../image/img/hotpot_home.jpeg";
import Slider from "react-slick";
import NextArrow from "../../../ui/NextArrow";
import PreArrow from "../../../ui/PreArrow";

function HotProduct() {
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
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 3,
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
    <section className="d-flex flex-column align-items-center ">
      <h2 className="py-5">熱門商品</h2>
      <div className="d-flex justify-content-center w-100">
        <div className="col-9 col-md-10">
          <Slider {...settings}>
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
            <ProductCard
              img={pic1}
              title="台北兒童新樂園 | 一日票"
              star="4.9/5"
              price="499"
            />
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default HotProduct;
