import React from "react";
import OrdersSelector from "./orders/OrdersSelector";
import OrdersDetail from "./orders/OrdersDetail";

function MyOrderHistory() {
  return (
    <>
      <div>
        <OrdersSelector />
        <OrdersDetail />
      </div>
    </>
  );
}

export default MyOrderHistory;
