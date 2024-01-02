import React, { useRef, useState } from "react";
import productImg from "./../image/img/hotpot_home.jpeg";
import { MY_HOST } from "../server/config";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { FaHouseChimney } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import ProductBanner from "./ProductBanner";
import ProductDetailSidebar from "./ProductDetailSidebar";
import ProductNavigate from "./ProductNavigate";
import ProductRecommend from "./ProductRecommend";

import HotelDatePick from "./HotelDatePick";
import Comment from "./Comment";
import TicketDatePick from "./TicketDatePick";
import Button from "./Button";

function ProductDetail({
  sid,
  type,
  image,
  area,
  name,
  hours,
  address,
  category,
  introduction,
  productName,
  originalPrice,
  price,
  productType = [],
}) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState("");
  const [typeSelected, setTypeSelected] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const top = useRef(null);
  const introductionRef = useRef(null);
  const howToUse = useRef(null);
  const commit = useRef(null);
  const recommend = useRef(null);
  const applicableStores = useRef(null);

  const quantityMinusOne = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      return;
    }
  };
  const quantityPlusOne = () => {
    setQuantity(quantity + 1);
  };

  const generateSideBar = () => {
    if (type === "hotel" || type === "ticket") {
      return (
        <>
          <div className="d-flex py-3 flex-column align-items-center gap-3 box-shadow">
            {productType.map((v, i) => {
              return (
                <Button
                  key={v.typeName}
                  onClick={() => {
                    setTypeSelected(i);
                  }}
                  className={`btn-primary col-4 py-1 px-1 ${
                    i === typeSelected ? "active" : ""
                  }`}
                >
                  {v.typeName}
                </Button>
              );
            })}
          </div>
          <ProductDetailSidebar
            sid={sid}
            productName={productName}
            originalPrice={originalPrice}
            price={quantity * productType[typeSelected].typePrice}
            className="box-shadow p-3"
            quantityMinusOne={quantityMinusOne}
            quantityPlusOne={quantityPlusOne}
            quantity={quantity}
          />
        </>
      );
    } else {
      return (
        <ProductDetailSidebar
          type={type}
          productName={productName}
          sid={sid}
          originalPrice={originalPrice}
          price={quantity * price}
          className="box-shadow p-3"
          quantityMinusOne={quantityMinusOne}
          quantityPlusOne={quantityPlusOne}
          quantity={quantity}
        />
      );
    }
  };

  return (
    <>
      <div className="container">
        <div ref={top} className="row">
          {/* ---------------------------商品照片與日期選擇--------------------------------- */}
          <ProductBanner image={image} name={name} type={type} />
          <div className="d-flex justify-content-between">
            <div className="col-md-7 col-lg-8">
              <div className="d-flex justify-content-between align-items-start">
                <div className="d-flex flex-column gap-5">
                  <div className="d-flex justify-content-between">
                    <div className="d-flex gap-5">
                      <div className="d-flex">
                        <h2>
                          <FiMapPin />
                        </h2>
                        <h2 className="pt-1">{area}</h2>
                      </div>
                      <div className="d-flex">
                        <h2>
                          <IoFastFoodOutline />
                        </h2>
                        <h2 className="pt-1">{category}</h2>
                      </div>
                    </div>
                    <div className="d-flex align-items-center">
                      <h2>
                        <IoPhonePortraitOutline />
                      </h2>
                      <span className="pt-1">現場請出示電子票券</span>
                    </div>
                  </div>
                  <p>{introduction}</p>
                  {type === "hotel" && (
                    <HotelDatePick
                      startDate={startDate}
                      setStartDate={setStartDate}
                      endDate={endDate}
                      setEndDate={setEndDate}
                    />
                  )}

                  {type === "ticket" && (
                    <TicketDatePick
                      startDate={startDate}
                      setStartDate={setStartDate}
                    />
                  )}
                  {/* ---------------------------商品介紹--------------------------------- */}
                  <section
                    ref={introductionRef}
                    className="d-flex flex-column gap-3"
                  >
                    <h2>商品介紹</h2>
                    <div className="d-flex flex-column gap-3">
                      <img
                        className="w-100"
                        src={`${MY_HOST}/uploads/${type}/${image}`}
                        alt="product-1"
                      />
                      <p>{productName}</p>
                    </div>
                  </section>
                  {/* ---------------------------如何使用--------------------------------- */}
                  <section>
                    <div className="d-flex flex-column">
                      <h2 className="d-flex gap-3 ">
                        <div>
                          <IoPhonePortraitOutline />
                        </div>
                        <div ref={howToUse} className="pt-1">
                          如何使用
                        </div>
                      </h2>
                    </div>
                    <div>
                      <h2>憑證使用方式</h2>
                      <p className="text-color-dark-grey">
                        •現場請出示電子票證
                      </p>
                    </div>
                  </section>
                  <section>
                    <div className="d-flex flex-column">
                      <h2 className="d-flex gap-3 ">
                        <div>
                          <FaHouseChimney />
                        </div>
                        <div ref={applicableStores} className="pt-1">
                          適用店家
                        </div>
                      </h2>
                    </div>
                    <div>
                      <p className="text-color-dark-grey">{name}</p>
                      <p className="text-color-dark-grey">地址：{address}</p>
                      <p className="text-color-dark-grey">
                        營業時間：週一至週日{hours}
                      </p>
                    </div>
                    <button className="btn-transparent-primary px-4">
                      <h2 className="d-flex">
                        <div>
                          <IoMdPin />
                        </div>
                        <div className="pt-1">查看地圖</div>
                      </h2>
                    </button>
                  </section>
                  {/* ---------------------------旅客評價--------------------------------- */}
                  <section>
                    <div className="d-flex flex-column gap-3">
                      <h2 ref={commit}>旅客評價</h2>
                      <div className="d-flex justify-content-between">
                        <div className="d-flex align-items-center gap-3 gap-md-5 col-md-6">
                          <h1 className="m-0 text-color-primary">4.3</h1>
                          <div className="d-flex flex-column flex-md-row gap-md-5">
                            <h2>
                              <FaStar className="text-color-primary" />
                              <FaStar className="text-color-primary" />
                              <FaStar className="text-color-primary" />
                              <FaStar className="text-color-primary" />
                              <FaRegStar className="text-color-primary" />
                            </h2>
                            <p className="m-0 p-0 pt-md-2">326篇評論</p>
                          </div>
                        </div>
                        <div className="col-xl-2">
                          <h2>熱門程度</h2>
                        </div>
                      </div>
                    </div>
                    {/* -------------評論------------------- */}
                    <Comment userImage={productImg} />
                    <Comment userImage={productImg} />
                  </section>
                </div>
              </div>
            </div>
            {/* ---------------------------右邊攔位--------------------------------- */}
            {/* TODO:如果是住宿與票券，需要加入票種/房型選擇，且價錢要隨之變化 */}
            <div className="d-none d-md-block col-4 col-md-4 col-lg-3">
              <div className="d-flex h-100 flex-column gap-5 sticky-top">
                {generateSideBar()}
                <ProductNavigate
                  topRef={top}
                  introductionRef={introductionRef}
                  howToUseRef={howToUse}
                  commitRef={commit}
                  recommendRef={recommend}
                  applicableStoresRef={applicableStores}
                  className="box-shadow p-3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div ref={recommend}>
        <ProductRecommend image={productImg} />
      </div>
    </>
  );
}

export default ProductDetail;
