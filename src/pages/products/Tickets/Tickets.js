import React, { useState } from "react";
import ProductCard from "../../../ui/ProductCard";
import { ITEMS_PER_PAGE, MY_HOST } from "../../../server/config";
import { useTickets } from "./useTickets";
import Loading from "../../../ui/Loading";
import Pages from "../../../ui/Pages";
import useCountPages from "../../../hooks/useCountPages";

function Tickets() {
  const [nowPage, setNowPage] = useState(1);
  const { tickets, isLoading } = useTickets();
  const { items, totalPages } = useCountPages(tickets, ITEMS_PER_PAGE, nowPage);

  if (isLoading) return <Loading />;

  return (
    <div className="d-flex flex-wrap">
      {items.slice(0, 6).map((v) => {
        const { sid, product_cover, product_name, product_price } = v;
        return (
          <div className="col-12 col-xl-4 col-md-6 ps-4 pb-4" key={sid}>
            <ProductCard
              productType={"tickets"}
              productId={sid}
              img={`${MY_HOST}/uploads/ticket/${product_cover}`}
              title={product_name}
              star="4.9/5"
              price={product_price}
            />
          </div>
        );
      })}
      <div className="w-100 d-flex justify-content-center">
        <Pages
          nowPage={nowPage}
          setNowPage={setNowPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
}

export default Tickets;
