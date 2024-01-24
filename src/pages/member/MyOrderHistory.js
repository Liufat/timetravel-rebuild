import React, { useState } from "react";
import OrdersSelector from "./orders/OrdersSelector";
import OrdersDetail from "./orders/OrdersDetail";

function MyOrderHistory() {
  const [ordersSelected, setOrderSelected] = useState("近期訂單");

  return (
    <>
      <div>
        <OrdersSelector
          ordersSelected={ordersSelected}
          setOrderSelected={setOrderSelected}
        />
        <OrdersDetail ordersSelected={ordersSelected} />
      </div>
    </>
  );
}

export default MyOrderHistory;
