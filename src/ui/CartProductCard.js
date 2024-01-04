import React from "react";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import moment from "moment";
import { useCart } from "../context/CartContext";
import Input from "./Input";

function CartProductCard({ item, type }) {
  const { removeCart } = useCart();
  return (
    <div className="d-flex justify-content-between py-5 px-3 border-top">
      <div className="col-9">
        <div className="d-flex gap-3">
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
            <Input type={"date"} />
          </div>
          <div>
            <p>退房時間</p>
            <Input type={"date"} />
          </div>
          <div className="d-flex align-items-end">
            <p className=" px-3 border">1晚</p>
          </div>
        </div>
      </div>
      <button
        className="col-1 d-flex justify-content-end"
        style={{ backgroundColor: "transparent" }}
        onClick={() => {
          removeCart(item);
        }}
      >
        <h2 className="d-flex">
          <ImCross className="text-color-black" />
        </h2>
      </button>
    </div>
  );
}

export default CartProductCard;
