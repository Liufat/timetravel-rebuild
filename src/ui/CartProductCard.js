import React, { useEffect, useState } from "react";
import { ImCross } from "react-icons/im";
import Button from "./Button";
import moment from "moment";
import { useCart } from "../context/CartContext";
import Input from "./Input";
import TicketCount from "./TicketCount";
import useAddDays from "../hooks/useAddDays";
import useCountDay from "../hooks/useCountDay";
import CommentStar from "./CommentStar";

function CartProductCard({ item, type }) {
  const countDay = useCountDay;
  const addDays = useAddDays;

  const { startDate, endDate, quantity, image, productName, score } = item;
  const { quantityPlusOne, quantityMinusOne, editCart, removeCart } = useCart();

  const [dayCount, setDayCount] = useState(
    countDay(item.startDate, item.endDate)
  );

  useEffect(() => {
    const countDayResult = countDay(startDate, endDate);
    setDayCount(countDayResult);
  }, [startDate, endDate, countDay]);

  const createHotelDatepick = () => {
    if (item.quantity !== dayCount) {
      editCart(item, { quantity: dayCount });
    }
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

  const createTicketDatepick = () => {
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
        </div>
      </>
    );
  };

  const createDatepickByType = () => {
    if (type === "hotel") {
      return createHotelDatepick();
    }
    if (type === "ticket") {
      return createTicketDatepick();
    }
  };

  const createCount = () => {
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
  };

  const createCountByType = () => {
    if (type === "food" || type === "ticket") {
      return createCount();
    }
  };

  const createDom = () => {
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
              <div className="d-flex align-items-center">
                {isNaN(score) ? (
                  <p>暫無評價</p>
                ) : (
                  <>
                    <CommentStar
                      score={score}
                      className={"text-color-primary"}
                    />
                    <p>{`${score}顆星`}</p>
                  </>
                )}
              </div>
            </div>
          </div>
          {createDatepickByType()}
        </div>
        {createCountByType()}
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
  };

  return createDom();
}

export default CartProductCard;
