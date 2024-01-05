import React, { useEffect, useMemo, useState } from "react";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import moment from "moment";
import { useCart } from "../context/CartContext";
import Input from "./Input";
import TicketCount from "./TicketCount";
import useAddDays from "../hooks/useAddDays";
import useCountDay from "../hooks/useCountDay";

function CartProductCard({ item, type }) {
  const countDay = useCountDay;
  const { quantityPlusOne, quantityMinusOne, editCart } = useCart();

  const [dayCount, setDayCount] = useState(
    countDay(item.startDate, item.endDate)
  );

  const { startDate, endDate, quantity, image, productName } = item;

  useEffect(() => {
    const countDayResult = countDay(startDate, endDate);
    setDayCount(countDayResult);
  }, [startDate, endDate, countDay]);

  if (item.quantity !== dayCount) {
    editCart(item, { quantity: dayCount });
  }

  const addDays = useAddDays;
  const createHotelDom = () => {
    return (
      <>
        <Button className="btn-primary text-color-white my-3 py-2 px-3">
          {item.chozenType}
        </Button>
        <div className="d-flex my-3 gap-3">
          <div>
            <Input
              value={item.startDate}
              inputType="date"
              type={"date"}
              label={"startDate"}
              min={moment().format("YYYY-MM-DD")}
              max={endDate}
              onChange={(e) => {
                editCart(item, { startDate: e.target.value });
              }}
            >
              入住時間
            </Input>
          </div>
          <div>
            <Input
              value={endDate}
              inputType="date"
              type={"date"}
              label={"endDate"}
              min={moment(addDays(startDate, 1)).format("YYYY-MM-DD")}
              onChange={(e) => {
                editCart(item, { endDate: e.target.value });
              }}
            >
              退房時間
            </Input>
          </div>
          <div className="d-flex align-items-end">
            <p className=" px-3 py-1 border">{dayCount}晚</p>
          </div>
        </div>
      </>
    );
  };

  const createTicketCountDom = () => {
    if (type === "food" || type === "ticket") {
      return (
        <TicketCount
          className={"col-2"}
          quantity={quantity}
          plus={() => {
            quantityPlusOne(item);
          }}
          minus={() => {
            quantityMinusOne(item);
          }}
        />
      );
    }
    return;
  };

  const { removeCart } = useCart();
  return (
    <div className="d-flex justify-content-between py-5 border-top">
      <div className="col-8">
        <div className="d-flex gap-3">
          <div
            style={{
              backgroundImage: `url(${image})`,
              width: "50px",
              height: "50px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: "50% 50%",
            }}
          ></div>
          <div>
            <p>{productName}</p>
            <p>4.3顆星</p>
          </div>
        </div>
        {type === "hotel" && createHotelDom()}
      </div>
      {createTicketCountDom()}
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
