import React from "react";

import productImg from "./../../../image/img/hotpot_home.jpeg";

import FoodDetailMain from "./FoodDetailMain";
import ProductBanner from "../../../ui/ProductBanner";
import ProductSidebar from "../../../ui/ProductSidebar";
import ProductRecommend from "../../../ui/ProductRecommend";
import ProductNavigate from "../../../ui/ProductNavigate";

function FoodDetail() {
  return (
    <>
      <div className="container">
        <div className="row">
          <ProductBanner image={productImg} />
          <div className="d-flex justify-content-between">
            <div className="col-md-7 col-lg-8">
              <FoodDetailMain />
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

export default FoodDetail;
