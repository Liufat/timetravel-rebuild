import moment from "moment";
import React from "react";
import { getOrderDetail } from "../../../server/orderApi";
import Loading from "../../../ui/Loading";
import Accordion from "../../../ui/Accordion";

function OrderUndoneAccordion({ order }) {
  const surface = {
    date: moment(order.orders_created_time).format("YYYY/MM/DD"),
    paymentId: order.uuid,
    paymentTotalPrice: order.orders_total_price,
    orderStatus: order.orders_status_sid,
  };
  const title = ["商品名稱", "商品單價", "商品數量", "小計"];

  const { orderDetail, isLoading } = getOrderDetail(order.uuid);

  if (isLoading) return <Loading />;

  return (
    <Accordion key={order.uuid} surface={surface} title={title}>
      {orderDetail.map((v, i) => {
        return (
          <div key={i} className="d-flex justify-content-center py-1">
            <p className="col-2 align-self-center">{v.product_name}</p>
            <p className="col-2 align-self-center">
              {v.room_price || v.p_selling_price || v.product_price}
            </p>
            <p className="col-2 align-self-center">{v.quantity}</p>
            <p className="col-2 align-self-center">{v.total_price}</p>
          </div>
        );
      })}
    </Accordion>
  );
}

export default OrderUndoneAccordion;
