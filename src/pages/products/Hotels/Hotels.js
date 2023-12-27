import React, { useState } from "react";
import ProductCard from "../../../ui/ProductCard";
import Pages from "../../../ui/Pages";
import Loading from "../../../ui/Loading";
import { useHotels } from "./useHotels";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import { MY_HOST } from "../../../server/config";
import styled from "styled-components";
import useSearchFilter from "../../../hooks/useSearchFilter";

const StyledWrap = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
  grid-gap: 1rem;
`;

const StyledPagesWrap = styled.div`
  grid-column: 1/-1;
`;

function Hotels() {
  const [nowPage, setNowPage] = useState(1);
  const { hotels, isLoading } = useHotels();
  const { items, totalPages } = useCountPages(
    useSearchFilter(hotels),
    ITEMS_PER_PAGE,
    nowPage
  );

  if (isLoading) return <Loading />;

  return (
    <StyledWrap className="px-3">
      {items.slice(0, 6).map((v) => {
        const { sid, picture, product_name, product_price } = v;
        return (
          <div className="box-shadow" key={sid}>
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

export default Hotels;
