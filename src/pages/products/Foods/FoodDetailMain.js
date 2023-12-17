import React from "react";
import Breadcrumb from "../../../ui/Breadcrumb";
import productImg from "./../../../image/img/hotpot_home.jpeg";
import styled from "styled-components";
import { CiHeart } from "react-icons/ci";
import { LuCalendarPlus } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { IoFastFoodOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";

import { FaHouseChimney } from "react-icons/fa6";
import { IoMdPin } from "react-icons/io";
import ProductSidebar from "../../../ui/ProductSidebar";

const StyledProductBanner = styled.div`
  width: 100%;
  height: 20vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`;

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

function FoodDetailMain() {
  return (
    <div className="d-flex justify-content-between align-items-start">
      <div className="d-flex flex-column gap-5">
        <div className="d-flex justify-content-between">
          <div className="d-flex gap-5">
            <div className="d-flex">
              <h2>
                <FiMapPin />
              </h2>
              <h2 className="pt-1">三重區</h2>
            </div>
            <div className="d-flex">
              <h2>
                <IoFastFoodOutline />
              </h2>
              <h2 className="pt-1">飲品</h2>
            </div>
          </div>
          <div className="d-flex align-items-center">
            <h2>
              <IoPhonePortraitOutline />
            </h2>
            <span className="pt-1">現場請出示電子票券</span>
          </div>
        </div>
        <p>
          50嵐自1994年創立品牌，這些年來我們堅持只賣茶飲，用精選茶葉，搭配好的原料，新鮮現調每一杯茶飲。感謝每一位支持50嵐的客人一直以來對我們的愛護，我們將更努力，希望能提供更好的商品與服務給每一位客人。
        </p>

        <section className="d-flex flex-column gap-3">
          <h2>商品介紹</h2>
          <div className="d-flex flex-column gap-3">
            <img className="w-100" src={productImg} alt="product-1" />
            <p>波霸奶茶(M)</p>
          </div>
          <div className="d-flex flex-column gap-3">
            <img className="w-100" src={productImg} alt="product-1" />
            <p>波霸奶茶(M)</p>
          </div>
          <div className="d-flex flex-column gap-3">
            <img className="w-100" src={productImg} alt="product-1" />
            <p>波霸奶茶(M)</p>
          </div>
        </section>
        <section>
          <div className="d-flex flex-column">
            <h2 className="d-flex gap-3 ">
              <div>
                <IoPhonePortraitOutline />
              </div>
              <h2 className="pt-1">如何使用</h2>
            </h2>
          </div>
          <div>
            <h2>憑證使用方式</h2>
            <p className="text-color-dark-grey">•現場請出示電子票證</p>
          </div>
        </section>
        <section>
          <div className="d-flex flex-column">
            <h2 className="d-flex gap-3 ">
              <div>
                <FaHouseChimney />
              </div>
              <h2 className="pt-1">適用店家</h2>
            </h2>
          </div>
          <div>
            <p className="text-color-dark-grey">50嵐(三重三和店)</p>
            <p className="text-color-dark-grey">
              地址：新北市三重區三和路四段205號
            </p>
            <p className="text-color-dark-grey">
              營業時間：週一至週日1000-2230
            </p>
          </div>
          <button className="btn-transparent-primary px-4">
            <h2 className="d-flex">
              <div>
                <IoMdPin />
              </div>
              <h2 className="pt-1">查看地圖</h2>
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
                <span className="text-color-dark-grey">2022/10/22</span>
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
                <span className="text-color-dark-grey">2022/10/22</span>
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
  );
}

export default FoodDetailMain;
