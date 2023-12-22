import React, { useState } from "react";
import productImg from "./../image/img/hotpot_home.jpeg";
import styled from "styled-components";
import { MY_HOST } from "../server/config";

import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FaCouch } from "react-icons/fa";

import { FaHouseChimney } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import ProductBanner from "./ProductBanner";
import ProductSidebar from "./ProductSidebar";
import ProductNavigate from "./ProductNavigate";
import ProductRecommend from "./ProductRecommend";

import Calander from "./Calander";

const StyledCommentCard = styled.div`
  border-top: 1px solid var(--color-grey);
`;
const StyledRoundImgWrap = styled.div`
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

function ProductDetail({
  type,
  image,
  area,
  name,
  hours,
  address,
  category,
  introduction,
  productName,
}) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // console.log(startDate);
  // console.log(endDate);

  if (type === "food")
    return (
      <>
        <div className="container">
          <div className="row">
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

                    <section className="d-flex flex-column gap-3">
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
                    <section>
                      <div className="d-flex flex-column">
                        <h2 className="d-flex gap-3 ">
                          <div>
                            <IoPhonePortraitOutline />
                          </div>
                          <div className="pt-1">如何使用</div>
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
                          <div className="pt-1">適用店家</div>
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

                    <section>
                      <div className="d-flex flex-column gap-3">
                        <h2>旅客評價</h2>
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
                      <StyledCommentCard className="d-flex flex-column gap-3 mt-3 pt-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex justify-content-start align-items-center col-xl-4 gap-3">
                            <StyledRoundImgWrap
                              style={{ backgroundImage: `url(${productImg})` }}
                              className="col-xl-3"
                            />
                            <div className="d-flex flex-column col-xl-8">
                              <span>花花</span>
                              <span>
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaRegStar className="text-color-primary" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="text-color-dark-grey">
                              2022/10/22
                            </span>
                          </div>
                        </div>
                        <div>
                          <p>
                            評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論
                          </p>
                        </div>
                      </StyledCommentCard>
                      <StyledCommentCard className="d-flex flex-column gap-3 mt-3 pt-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex justify-content-start align-items-center col-xl-4 gap-3">
                            <StyledRoundImgWrap
                              style={{ backgroundImage: `url(${productImg})` }}
                              className="col-xl-3"
                            />
                            <div className="d-flex flex-column col-xl-8">
                              <span>花花</span>
                              <span>
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaRegStar className="text-color-primary" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="text-color-dark-grey">
                              2022/10/22
                            </span>
                          </div>
                        </div>
                        <div>
                          <p>
                            評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論
                          </p>
                        </div>
                      </StyledCommentCard>
                    </section>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block col-4 col-md-4 col-lg-3">
                <div className="d-flex h-100 flex-column gap-5 sticky-top">
                  <ProductSidebar className="box-shadow p-3" />
                  <ProductNavigate className="box-shadow p-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductRecommend image={productImg} />
      </>
    );

  if (type === "hotel")
    return (
      <>
        <div className="container">
          <div className="row">
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
                            <FaCouch />
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
                    <section className="d-flex gap-4">
                      <Calander
                        value={startDate}
                        setValue={setStartDate}
                        className={"col-5 box-shadow"}
                        min={new Date()}
                        max={endDate}
                      />
                      <Calander
                        value={endDate}
                        setValue={setEndDate}
                        min={new Date().setDate(new Date().getDate() + 1)}
                        className={"col-5 box-shadow"}
                      />
                    </section>

                    <section className="d-flex flex-column gap-3">
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
                    <section>
                      <div className="d-flex flex-column">
                        <h2 className="d-flex gap-3 ">
                          <div>
                            <IoPhonePortraitOutline />
                          </div>
                          <div className="pt-1">如何使用</div>
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
                          <div className="pt-1">適用店家</div>
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

                    <section>
                      <div className="d-flex flex-column gap-3">
                        <h2>旅客評價</h2>
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
                      <StyledCommentCard className="d-flex flex-column gap-3 mt-3 pt-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex justify-content-start align-items-center col-xl-4 gap-3">
                            <StyledRoundImgWrap
                              style={{ backgroundImage: `url(${productImg})` }}
                              className="col-xl-3"
                            />
                            <div className="d-flex flex-column col-xl-8">
                              <span>花花</span>
                              <span>
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaRegStar className="text-color-primary" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="text-color-dark-grey">
                              2022/10/22
                            </span>
                          </div>
                        </div>
                        <div>
                          <p>
                            評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論
                          </p>
                        </div>
                      </StyledCommentCard>
                      <StyledCommentCard className="d-flex flex-column gap-3 mt-3 pt-3">
                        <div className="d-flex justify-content-between">
                          <div className="d-flex justify-content-start align-items-center col-xl-4 gap-3">
                            <StyledRoundImgWrap
                              style={{ backgroundImage: `url(${productImg})` }}
                              className="col-xl-3"
                            />
                            <div className="d-flex flex-column col-xl-8">
                              <span>花花</span>
                              <span>
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaStar className="text-color-primary" />
                                <FaRegStar className="text-color-primary" />
                              </span>
                            </div>
                          </div>
                          <div>
                            <span className="text-color-dark-grey">
                              2022/10/22
                            </span>
                          </div>
                        </div>
                        <div>
                          <p>
                            評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論評論
                          </p>
                        </div>
                      </StyledCommentCard>
                    </section>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block col-4 col-md-4 col-lg-3">
                <div className="d-flex h-100 flex-column gap-5 sticky-top">
                  <ProductSidebar className="box-shadow p-3" />
                  <ProductNavigate className="box-shadow p-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <ProductRecommend image={productImg} />
      </>
    );
}

export default ProductDetail;
