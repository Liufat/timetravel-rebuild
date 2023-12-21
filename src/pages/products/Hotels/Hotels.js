import React, { useState } from "react";
import ProductCard from "../../../ui/ProductCard";
import Pages from "../../../ui/Pages";
import Loading from "../../../ui/Loading";
import { useHotels } from "./useHotels";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import { MY_HOST } from "../../../server/config";

function Hotels() {
  const [nowPage, setNowPage] = useState(1);
  const { hotels, isLoading } = useHotels();
  const { items, totalPages } = useCountPages(hotels, ITEMS_PER_PAGE, nowPage);

  if (isLoading) return <Loading />;

  return (
    <div className="d-flex flex-wrap">
      {items.slice(0, 6).map((v) => {
        const { sid, picture, product_name, product_price } = v;
        return (
          <div className="col-12 col-xl-4 col-md-6 ps-4 pb-4" key={sid}>
            <ProductCard
              productType={"hotels"}
              productId={sid}
              img={`${MY_HOST}/uploads/hotel/${picture}`}
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

export default Hotels;
