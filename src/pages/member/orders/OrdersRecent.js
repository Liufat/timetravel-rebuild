import React, { useEffect, useState } from "react";
import Pages from "../../../ui/Pages";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import OrderAccordion from "./OrderAccordion";
import itemsFilter from "../../../hooks/useFilter";
import LittleTriangle from "../../../ui/LittleTriangle";

function OrdersRecent({ orders }) {
  const [nowPage, setNowPage] = useState(1);
  const { items, totalPages } = useCountPages(orders, ITEMS_PER_PAGE, nowPage);

  const [showItems, setShowItems] = useState(items);

  const [type, setType] = useState("date");
  const [sort, setSort] = useState(true);
  // true = asc
  // false = desc
  console.log(type);

  // 切換filter的功能
  // 1.點擊標題時，改成指定的filter
  const changeFilter = (typeTag) => {
    // 2.如果filter === filterTag，切換sort
    if (type === typeTag) setSort(!sort);
    // 3.如果filter !== filterTag，切換filter
    if (type !== typeTag) {
      setType(typeTag);
      setSort(false);
    }
  };

  useEffect(() => {
    itemsFilter(items, type, sort, setShowItems);
  }, [sort, type]);

  return (
    <div>
      <div className="d-flex flex-column  text-center">
        <div className="d-flex py-3 border-bottom">
          <div
            className="col-4 pointer position-relative"
            onClick={() => changeFilter("date")}
          >
            {type === "date" && (
              <LittleTriangle className={"start-0"} show={!sort} />
            )}
            <h2>訂單成立日期</h2>
          </div>
          <div
            className="col-4 pointer position-relative"
            onClick={() => changeFilter("id")}
          >
            {type === "id" && (
              <LittleTriangle className={"start-0"} show={!sort} />
            )}
            <h2>訂單編號</h2>
          </div>
          <div
            className="col-4 pointer position-relative"
            onClick={() => changeFilter("totalPrice")}
          >
            {type === "totalPrice" && (
              <LittleTriangle className={"start-0"} show={!sort} />
            )}
            <h2>訂單總價</h2>
          </div>
        </div>
        {showItems.map((order) => {
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
