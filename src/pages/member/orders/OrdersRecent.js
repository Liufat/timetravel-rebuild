import React, { useState } from "react";
import Pages from "../../../ui/Pages";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import OrderAccordion from "./OrderAccordion";

function OrdersRecent({ orders }) {
  const [nowPage, setNowPage] = useState(1);
  const { items, totalPages } = useCountPages(orders, ITEMS_PER_PAGE, nowPage);

  return (
    <div>
      <div className="d-flex flex-column  text-center">
        <div className="d-flex py-3 border-bottom">
          <h2 className="col-4">訂單成立日期</h2>
          <h2 className="col-4">訂單編號</h2>
          <h2 className="col-4">訂單總價</h2>
        </div>
        {items.map((order) => {
          return <OrderAccordion order={order} key={order.uuid} />;
        })}
        <div className="col-4 py-3 d-flex w-100 justify-content-center">
          <Pages
            nowPage={nowPage}
            setNowPage={setNowPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
}

export default OrdersRecent;
