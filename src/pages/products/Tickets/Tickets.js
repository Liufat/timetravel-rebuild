import React from "react";
import ProductCard from "../../../ui/ProductCard";
import productImage from "./../../../image/img/hotpot_home.jpeg";

function Tickets() {
  return (
    <div className="d-flex flex-wrap">
      <div className="col-xl-4 col-md-6 ps-4 pb-4">
        <ProductCard
          img={productImage}
          title="台北兒童新樂園 | 一日票"
          star="4.9/5"
          price="499"
        />
      </div>
    </div>
  );
}

export default Tickets;
