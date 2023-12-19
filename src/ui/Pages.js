import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const StyledPageSpan = styled.div`
  border: 1px solid var(--color-grey);
  border-radius: 50% 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &.active {
    background-color: var(--color-secondary);
    color: var(--color-white);
  }
  &.disable {
    background-color: var(--color-grey);
    cursor: auto;
  }
`;

function Pages({ nowPage, setNowPage, totalPages = 1 }) {
  const pagesArray = new Array(totalPages).fill("");

  const maxPagination = 5;

  const countPagination = () => {};

  const minusPage = () => {
    if (nowPage > 1) {
      setNowPage(nowPage - 1);
    } else {
      return;
    }
  };

  const plusPage = () => {
    if (nowPage < totalPages) {
      setNowPage(nowPage + 1);
    } else {
      return;
    }
  };

  const selectPage = (e) => {
    setNowPage(+e.target.textContent);
  };
  return (
    <div className="d-flex gap-2">
      <StyledPageSpan className={nowPage === 1 && "disable"}>
        <FaChevronLeft onClick={minusPage} />
      </StyledPageSpan>
      {pagesArray.map((v, i) => (
        <StyledPageSpan
          key={i}
          className={nowPage === i + 1 && "active"}
          onClick={selectPage}
        >
          {i + 1}
        </StyledPageSpan>
      ))}
      <StyledPageSpan
        onClick={plusPage}
        className={nowPage === totalPages && "disable"}
      >
        <FaChevronRight />
      </StyledPageSpan>
    </div>
  );
}

export default Pages;
