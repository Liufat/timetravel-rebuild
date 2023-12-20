import React, { useState } from "react";
import ProductCard from "../../../ui/ProductCard";
import { useSites } from "./useSites";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import Loading from "../../../ui/Loading";
import Pages from "../../../ui/Pages";
import { MY_HOST } from "../../../server/config";
function Sites() {
  const [nowPage, setNowPage] = useState(1);
  const { sites, isLoading } = useSites();
  const { items, totalPages } = useCountPages(sites, ITEMS_PER_PAGE, nowPage);

  if (isLoading) return <Loading />;

  return (
    <div className="d-flex flex-wrap">
      {items.map((v) => {
        const { sid, cover, name } = v;
        return (
          <div className="col-12 col-xl-4 col-md-6 ps-4 pb-4" key={sid}>
            <ProductCard
              img={`${MY_HOST}/uploads/site/${cover}`}
              title={name}
              star="4.9/5"
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

export default Sites;
