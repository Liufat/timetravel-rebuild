import React, { useState } from "react";
import ProductCard from "../../../ui/ProductCard";
import { useSites } from "./useSites";
import useCountPages from "../../../hooks/useCountPages";
import { ITEMS_PER_PAGE } from "../../../server/config";
import Loading from "../../../ui/Loading";
import Pages from "../../../ui/Pages";
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
function Sites() {
  const [nowPage, setNowPage] = useState(1);
  const { sites, isLoading } = useSites();
  const { items, totalPages } = useCountPages(
    useSearchFilter(sites),
    ITEMS_PER_PAGE,
    nowPage
  );

  if (isLoading) return <Loading />;

  return (
    <StyledWrap className="px-3">
      {items.map((v) => {
        const { sid, cover, name } = v;
        return (
          <div className="box-shadow" key={sid}>
            <ProductCard
              productType={"sites"}
              productId={sid}
              img={`${MY_HOST}/uploads/site/${cover}`}
              title={name}
              star="4.9/5"
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

export default Sites;
