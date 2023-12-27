import React from "react";

function ProductNavigate({ className }) {
  return (
    <div className="h-100">
      <div className={`d-flex flex-column gap-3 sticky-top ${className}`}>
        <a href="#introduction">
          <h2>商品介紹</h2>
        </a>
        <a href="#howToUse">
          <h2>如何使用</h2>
        </a>
        <a href="#applicableStores">
          <h2>適用店家</h2>
        </a>
        <a href="#commit">
          <h2>旅客評價</h2>
        </a>
        <a href="#recommend">
          <h2>推薦美食</h2>
        </a>
        <a href="#top">
          <h2>回到最上層</h2>
        </a>
      </div>
    </div>
  );
}

export default ProductNavigate;
