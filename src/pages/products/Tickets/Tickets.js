import React, { useState } from "react";
import ProductCard from "../../../ui/ProductCard";
import { ITEMS_PER_PAGE, MY_HOST } from "../../../server/config";
import { useTickets } from "./useTickets";
import Loading from "../../../ui/Loading";
import Pages from "../../../ui/Pages";
import useCountPages from "../../../hooks/useCountPages";
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

function Tickets() {
  const [nowPage, setNowPage] = useState(1);
  const { tickets, isLoading } = useTickets();
  const { items, totalPages } = useCountPages(
    useSearchFilter(tickets),
    ITEMS_PER_PAGE,
    nowPage
  );

  if (isLoading) return <Loading />;

  return (
    <StyledWrap className="px-3">
      {items.slice(0, 6).map((v) => {
        const { sid, product_cover, product_name, product_price } = v;
        return (
          <div className="box-shadow" key={sid}>
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

export default Tickets;
