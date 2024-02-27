import React, { useState } from "react";
import Comment from "../comment/Comment";

import Loading from "../../../ui/Loading";
import moment from "moment";
import Button from "../../../ui/Button";
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

  const [commentShow, setCommentShow] = useState(false);
  const [commentDetail, setCommentDetail] = useState({});

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Accordion key={order.uuid} surface={surface} title={title}>
      {orderDetail.map((v, i) => {
        return (
          <AccordionDetails
            key={i}
            value={v}
            order={order}
            setCommentDetail={setCommentDetail}
            commentDetail={commentDetail}
            setCommentShow={setCommentShow}
          />
        );
      })}
      <Comment
        show={commentShow}
        onHide={() => setCommentShow(false)}
        state="editing"
        name={commentDetail.product_name}
        productNumber={commentDetail.product_number}
        uuid={order.uuid}
        commentDetail={commentDetail}
        setCommentDetail={setCommentDetail}
      />
    </Accordion>
  );
}

export default OrderAccordion;
