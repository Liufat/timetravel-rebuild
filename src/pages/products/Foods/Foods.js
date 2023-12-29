import ProductCard from "../../../ui/ProductCard";
import { ITEMS_PER_PAGE, MY_HOST } from "../../../server/config";
import { useFoods } from "./useFoods";
import Loading from "../../../ui/Loading";
import useCountPages from "../../../hooks/useCountPages";
import Pages from "../../../ui/Pages";
import { useState } from "react";
import useSearchFilter from "../../../hooks/useSearchFilter";
import styled from "styled-components";

const StyledWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

const StyledPagesWrap = styled.div`
  grid-column: 1/-1;
`;

function Foods() {
  const [nowPage, setNowPage] = useState(1);
  const { foods, isLoading } = useFoods();

  const { items, totalPages } = useCountPages(
    useSearchFilter(foods),
    ITEMS_PER_PAGE,
    nowPage
  );
  if (isLoading) return <Loading />;

  return (
    <StyledWrap className="px-3">
      {items.map((v) => {
        const {
          sid,
          product_photo: cover,
          product_name: name,
          p_selling_price: price,
        } = v;
        return (
          <div className="box-shadow" key={sid}>
            <ProductCard
              productType={"foods"}
              productId={sid}
              img={`${MY_HOST}/uploads/food/${cover}`}
              title={name}
              star="4.9/5"
              price={price}
            />
          </div>
        );
      })}
      <StyledPagesWrap className="w-100 d-flex justify-content-center">
        <Pages
          nowPage={nowPage}
          setNowPage={setNowPage}
          totalPages={totalPages}
        />
      </StyledPagesWrap>
    </StyledWrap>
  );
}

export default Foods;
