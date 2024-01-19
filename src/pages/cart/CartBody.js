import React from "react";
import { useCartPage } from "../../context/CartPageContext";
import CartHotel from "./CartHotel";
import CartFood from "./CartFood";
import CartTicket from "./CartTicket";
import CartInformCheck from "./CartInformCheck";
import CartPay from "./CartPay";

function CartBody({ className }) {
  const { cartPageState } = useCartPage();

  const { allPages, nowPage } = cartPageState;

  const createDom = () => {
    switch (allPages[nowPage]) {
      case "住宿":
        return <CartHotel />;
      case "美食":
        return <CartFood />;
      case "票券":
        return <CartTicket />;
      case "結帳":
        return <CartInformCheck />;
      default:
        throw new Error("頁面不存在，請聯絡客服人員");
    }
  };

  return <div className={className}>{createDom()}</div>;
}

export default CartBody;
