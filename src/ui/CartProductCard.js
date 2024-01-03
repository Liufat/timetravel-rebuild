import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import Button from "./Button";
import styled from "styled-components";

const StyledBlock = styled(<Button />)``;

function CartProductCard({ item, type }) {
  return (
    <div className="d-flex justify-content-between py-3 px-3 border">
      <div className="col-9">
        <div className="d-flex gap-3 my-3">
          <div
            style={{
              backgroundImage: `url(${item.image})`,
              width: "50px",
              height: "50px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50% 50%",
            }}
          ></div>
          <div>
            <p>{item.productName}</p>
            <p>4.3顆星</p>
          </div>
        </div>
        <Button className="btn-primary text-color-white my-3 py-2 px-3">
          {item.chozenType}
        </Button>
        <div className="d-flex my-3 gap-3">
          <div>
            <p>入住時間</p>
            <input type="date" />
          </div>
          <div>
            <p>退房時間</p>
            <input type="date" />
          </div>
          <div className="d-flex align-items-end">
            <p className=" px-3 border">1晚</p>
          </div>
        </div>
      </div>
      <button
        className="col-1 d-flex justify-content-end"
        style={{ backgroundColor: "transparent" }}
      >
        <h2 className="d-flex">
          <TiDeleteOutline className="text-color-black" />
        </h2>
      </button>
    </div>
  );
}

export default CartProductCard;
