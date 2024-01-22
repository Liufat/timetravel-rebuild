import React, { useCallback, useEffect } from "react";
import CartHeader from "./CartHeader";
import CartSidebar from "./CartSidebar";
import CartBody from "./CartBody";
import { useCartPage } from "../../context/CartPageContext";

function Cart() {
  const { cartPageState, selectPage } = useCartPage();

  const { allPages, nowPage } = cartPageState;

  useEffect(() => {
    selectPage(0);
  }, []);
  const createDom = () => {
    if (allPages[nowPage] === "結帳") {
      return <CartBody className="py-5 w-100" />;
    } else {
      return (
        <>
          <CartBody className="col-7 py-5" />
          <CartSidebar className="col-4 py-5" />
        </>
      );
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <CartHeader />
          <div className="d-flex gap-5 justify-content-between">
            {createDom()}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
