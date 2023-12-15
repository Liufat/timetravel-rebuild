import React from "react";

function ProductSidebar() {
  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-3 box-shadow px-4 py-3">
        <h1>篩選目的地</h1>
        <div className="ps-2">
          <p>基隆市</p>
          <p>台北市</p>
          <p>新北市</p>
        </div>
      </div>
      <div className="d-flex flex-column gap-3 box-shadow px-4 py-3">
        <h1>所有商品類別</h1>
        <div className="ps-2">
          <p>全部類別</p>
          <p>行程</p>
          <p>美食</p>
          <p>住宿</p>
          <p>票券</p>
        </div>
      </div>
      <div className="d-flex flex-column gap-3 box-shadow px-4 py-3">
        <h1>收藏</h1>
        <div className="ps-2">
          <p>0~50</p>
          <p>51~100</p>
          <p>101~150</p>
          <p>151~200</p>
          <p>201~250</p>
        </div>
      </div>
    </div>
  );
}

export default ProductSidebar;
