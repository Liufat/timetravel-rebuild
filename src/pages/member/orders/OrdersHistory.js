import React, { useEffect, useState } from "react";
import { useOrderDetail } from "./useOrderDetail";
import moment from "moment";
import Loading from "../../../ui/Loading";
import Accordion from "../../../ui/Accordion";
import Button from "../../../ui/Button";
import Pages from "../../../ui/Pages";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import itemsFilter from "../../../hooks/useFilter";

function OrdersHistory({ orders }) {
  const title = ["商品名稱", "商品單價", "商品數量", "小計", "評價"];

  const getDetail = useOrderDetail;
  const [nowPage, setNowPage] = useState(1);
  const { items, totalPages } = useCountPages(orders, ITEMS_PER_PAGE, nowPage);

  const [showItems, setShowItems] = useState(items);

  const [type, setType] = useState("date");
  const [sort, setSort] = useState(true);
  // true = asc
  // false = desc

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
          <h2 className="col-4 pointer" onClick={() => changeFilter("date")}>
            訂單成立日期
          </h2>
          <h2 className="col-4 pointer" onClick={() => changeFilter("id")}>
            訂單編號
          </h2>
          <h2
            className="col-4 pointer"
            onClick={() => changeFilter("totalPrice")}
          >
            訂單總價
          </h2>
        </div>
        {showItems.map((order) => {
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

export default OrdersHistory;
