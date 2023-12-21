import React, { useEffect, useState } from "react";

import productImg from "./../../../image/img/hotpot_home.jpeg";

import FoodDetailMain from "./FoodDetailMain";
import ProductBanner from "../../../ui/ProductBanner";
import ProductSidebar from "../../../ui/ProductSidebar";
import ProductRecommend from "../../../ui/ProductRecommend";
import ProductNavigate from "../../../ui/ProductNavigate";
import { useFoodDetail } from "./useFoodDetail";
import { getFoodDetail } from "../../../server/foodsApi";
import { useParams } from "react-router-dom";
import Loading from "../../../ui/Loading";

function FoodDetail() {
  const { sid } = useParams();
  const { foodDetail, isLoading } = useFoodDetail(sid);

  if (isLoading) return <Loading />;

  const {
    product_name,
    product_photo,
    p_business_hours,
    product_address,
    area_name,
    categories_name,
    product_introduction,
    applicable_store,
  } = foodDetail;
  return (
    <FoodDetailMain
      type={"food"}
      name={applicable_store}
      image={product_photo}
      hours={p_business_hours}
      address={product_address}
      area={area_name}
      category={categories_name}
      introduction={product_introduction}
      productName={product_name}
    />
  );
}

export default FoodDetail;
