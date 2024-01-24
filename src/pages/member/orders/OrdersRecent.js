import React from "react";
import Accordion from "../../../ui/Accordion";
import Button from "../../../ui/Button";
import moment from "moment";
import { useOrderDetail } from "./useOrderDetail";
import Loading from "../../../ui/Loading";

function OrdersRecent({ orders }) {
  const title = ["商品名稱", "商品單價", "商品數量", "小計", "評價"];

  const getDetail = useOrderDetail;

  return (
    <div>
      <div className="d-flex flex-column  text-center">
        <div className="d-flex py-3 border-bottom">
          <h2 className="col-4">訂單成立日期</h2>
          <h2 className="col-4">訂單編號</h2>
          <h2 className="col-4">訂單總價</h2>
        </div>
        {orders.map((order) => {
          const surface = {
            date: moment(order.orders_created_time).format("YYYY/MM/DD"),
            paymentId: order.uuid,
            paymentTotalPrice: order.orders_total_price,
          };
          const { orderDetail, isLoading } = getDetail(order.uuid);
          if (isLoading) return <Loading key={order.uuid} />;
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
                    <p className="col-2 align-self-center">
                      {v.commentState === 1 ? (
                        <Button className="btn-secondary px-2 py-1">
                          已評論
                        </Button>
                      ) : (
                        <Button className="btn-primary px-2 py-1">
                          留下評論
                        </Button>
                      )}
                    </p>
                  </div>
                );
              })}
            </Accordion>
          );
        })}
      </div>
    </div>
  );
}

export default OrdersRecent;
