import ProductCard from "../../../ui/ProductCard";
import { ITEMS_PER_PAGE, MY_HOST } from "../../../server/config";
import { useFoods } from "./useFoods";
import Loading from "../../../ui/Loading";
import useCountPages from "../../../hooks/useCountPages";
import Pages from "../../../ui/Pages";
import { useState } from "react";

function Foods() {
  const [nowPage, setNowPage] = useState(1);
  const { foods, isLoading } = useFoods();
  const { items, totalPages } = useCountPages(
    foods,
    ITEMS_PER_PAGE,
    nowPage
  );

  if (isLoading) return <Loading />;

  return (
    <div className="d-flex flex-wrap">
      {items.map((v) => {
        const { sid, product_photo, product_name, p_selling_price } = v;
        return (
          <div className="col-12 col-xl-4 col-md-6 ps-4 pb-4" key={sid}>
            <ProductCard
              img={`${MY_HOST}/uploads/food/${product_photo}`}
              title={product_name}
              star="4.9/5"
              price={p_selling_price}
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

export default Foods;
