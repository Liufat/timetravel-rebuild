import React from "react";

import Loading from "../../../ui/Loading";
import moment from "moment";
import Accordion from "../../../ui/Accordion";
import { useOrderDetail } from "./useOrderDetail";
import AccordionDetails from "../../../ui/AccordionDetails";

function OrderAccordion({ order }) {
  const title = ["商品名稱", "商品單價", "商品數量", "小計", "評價"];
  const surface = {
    date: moment(order.orders_created_time).format("YYYY/MM/DD"),
    paymentId: order.uuid,
    paymentTotalPrice: order.orders_total_price,
  };
  const { orderDetail, isLoading } = useOrderDetail(order.uuid);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Accordion key={order.uuid} surface={surface} title={title}>
      {orderDetail.map((v, i) => {
        return <AccordionDetails key={i} value={v} order={order} />;
      })}
    </Accordion>
  );
}

export default OrderAccordion;
