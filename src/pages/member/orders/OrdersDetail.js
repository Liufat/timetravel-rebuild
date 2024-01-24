import React from "react";
import { useOrders } from "./useOrders";
import Loading from "../../../ui/Loading";
import OrdersRecent from "./OrdersRecent";
import OrdersUndone from "./OrdersUndone";
import OrdersHistory from "./OrdersHistory";
import { useLocalStorage } from "../../../hooks/useLocalStorage";

function OrdersDetail({ ordersSelected }) {
  const memberId = useLocalStorage.get("member").sid;
  const { orders, isLoading } = useOrders(memberId);

  if (isLoading) {
    return <Loading />;
  }

  const ordersRecent = orders.filter((order) => {
    return (
      +new Date() - +new Date(order.orders_created_time) <
        30 * 24 * 60 * 60 * 1000 && order.orders_status_sid === 2
    );
  });
  const ordersHistory = orders.filter((order) => {
    return (
      +new Date() - +new Date(order.orders_created_time) >=
        30 * 24 * 60 * 60 * 1000 && order.orders_status_sid === 2
    );
  });
  const ordersUndone = orders.filter((order) => {
    return order.orders_status_sid === 1;
  });

  const createOrdersRecent = () => {
    return <OrdersRecent orders={ordersRecent} />;
  };
  const createOrdersUndone = () => {
    return <OrdersUndone orders={ordersUndone} />;
  };
  const createOrdersHistory = () => {
    return <OrdersHistory orders={ordersHistory} />;
  };

  const createDomByOrdersSelected = () => {
    if (ordersSelected === "近期訂單") return createOrdersRecent();
    if (ordersSelected === "交易中訂單") return createOrdersUndone();
    if (ordersSelected === "歷史訂單") return createOrdersHistory();
  };

  return createDomByOrdersSelected();
}

export default OrdersDetail;
