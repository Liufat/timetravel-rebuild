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
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";

const StyledProductBanner = styled.div`
  width: 100%;
  height: 20vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

function FoodDetail() {
  return (
    <main>
      <section className="mt-4 d-flex flex-column gap-3">
        <Breadcrumb />
        <StyledProductBanner
          style={{ backgroundImage: `url(${productImg})` }}
        />
        <div className="d-flex justify-content-between">
          <h2>50嵐 | (三和店)</h2>
          <div className="d-flex gap-5">
            <h2>
              <CiHeart />
            </h2>
            <h2>
              <LuCalendarPlus />
            </h2>
          </div>
        </div>
        <h2 className="d-flex align-items-center">
          <FaStar className="text-color-primary" />
          <FaStar className="text-color-primary" />
          <FaStar className="text-color-primary" />
          <FaStar className="text-color-primary" />
          <FaRegStar className="text-color-primary" />
          4.3顆星
        </h2>
      </section>
      <section className="d-flex justify-content-between align-items-center">
        <div className="d-flex col-xl-9 justify-content-between">
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
        <div className="col-xl-2">
          <h2>選擇張數</h2>
          <div className="d-flex align-items-center gap-5">
            <h2>
              <FaMinusCircle />
            </h2>
            <h2 className="pt-1">1</h2>
            <h2>
              <FaCirclePlus className="text-color-primary" />
            </h2>
          </div>
        </div>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </main>
  );
}

export default FoodDetail;
