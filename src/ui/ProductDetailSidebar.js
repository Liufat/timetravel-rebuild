import React from "react";

import Button from "./Button";

import Swal from "sweetalert2";

import { useCart } from "../context/CartContext";
import { MY_HOST } from "../server/config";
import TicketCount from "./TicketCount";
import moment from "moment";

function ProductDetailSidebar({
  type,
  productName,
  sid,
  className,
  originalPrice,
  price,
  quantityMinusOne,
  quantityPlusOne,
  quantity,
  chozenType,
  startDate,
  endDate,
  image,
  score,
}) {
  const { addCart } = useCart();

  const handleAddCart = () => {
    Swal.fire({
      icon: "success",
      title: "已加入購物車！",
      confirmButtonText: "確認",
      confirmButtonColor: "#59d8a1",
    });
    addCart({
      type,
      image: `${MY_HOST}/uploads/${type}/${image}`,
      id: sid,
      productName,
      chozenType,
      price: price,
      quantity,
      startDate: moment(startDate).format("YYYY-MM-DD"),
      endDate: moment(endDate).format("YYYY-MM-DD"),
      score,
    });
  };

  return (
    <div className={className}>
      <div className="d-flex flex-column gap-2">
        {type === "hotel" ? <h2>選擇住宿天數</h2> : <h2>選擇張數</h2>}

        <TicketCount
          minus={quantityMinusOne}
          plus={quantityPlusOne}
          quantity={quantity}
        />
      </div>
      <div>
        {originalPrice && (
          <h2 className="text-color-grey">
            <del>TWD${originalPrice}</del>
          </h2>
        )}
        <h1 className="text-color-primary">TWD${price}</h1>
      </div>
      <div className="d-flex justify-content-center gap-3 w-100">
        <Button className=" btn-secondary py-2 px-1 " onClick={handleAddCart}>
          <p>加入購物車</p>
        </Button>
        <Button className=" btn-primary py-2 px-1">
          <p>立即購買</p>
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailSidebar;
