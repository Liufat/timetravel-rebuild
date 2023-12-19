import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import styled from "styled-components";

const StyledPageSpan = styled.button`
  border: 1px solid var(--color-grey);
  border-radius: 50% 50%;
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-black);
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

  const createPagination = () => {
    if (totalPages <= 5) {
      return (
        <>
          {new Array(totalPages).fill("").map((v, i) => {
            return (
              <StyledPageSpan
                onClick={selectPage}
                key={i}
                className={nowPage === i + 1 && "active"}
              >
                {i + 1}
              </StyledPageSpan>
            );
          })}
        </>
      );
    }

    if (nowPage < 4) {
      return (
        <>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === 1 && "active"}
          >
            1
          </StyledPageSpan>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === 2 && "active"}
          >
            2
          </StyledPageSpan>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === 3 && "active"}
          >
            3
          </StyledPageSpan>
          <StyledPageSpan onClick={selectPage}>4</StyledPageSpan>
          <StyledPageSpan onClick={selectPage}>5</StyledPageSpan>
          <span>...</span>
          <StyledPageSpan onClick={selectPage}>{totalPages}</StyledPageSpan>
        </>
      );
    } else if (nowPage >= 4 && nowPage <= totalPages - 3) {
      return (
        <>
          <StyledPageSpan onClick={selectPage}>1</StyledPageSpan>
          <span>...</span>
          <StyledPageSpan onClick={selectPage}>{nowPage - 2}</StyledPageSpan>
          <StyledPageSpan onClick={selectPage}>{nowPage - 1}</StyledPageSpan>
          <StyledPageSpan onClick={selectPage} className={"active"}>
            {nowPage}
          </StyledPageSpan>
          <StyledPageSpan onClick={selectPage}>{nowPage + 1}</StyledPageSpan>
          <StyledPageSpan onClick={selectPage}>{nowPage + 2}</StyledPageSpan>
          <span>...</span>
          <StyledPageSpan onClick={selectPage}>{totalPages}</StyledPageSpan>
        </>
      );
    } else {
      return (
        <>
          <StyledPageSpan onClick={selectPage}>1</StyledPageSpan>
          <span>...</span>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === totalPages - 4 && "active"}
          >
            {totalPages - 4}
          </StyledPageSpan>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === totalPages - 3 && "active"}
          >
            {totalPages - 3}
          </StyledPageSpan>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === totalPages - 2 && "active"}
          >
            {totalPages - 2}
          </StyledPageSpan>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === totalPages - 1 && "active"}
          >
            {totalPages - 1}
          </StyledPageSpan>
          <StyledPageSpan
            onClick={selectPage}
            className={nowPage === totalPages && "active"}
          >
            {totalPages}
          </StyledPageSpan>
        </>
      );
    }
  };

  return (
    <div
      className={`d-flex justify-content-around gap-2 ${
        totalPages > 5 && "col-xl-8"
      }`}
    >
      <StyledPageSpan className={nowPage === 1 && "disable"}>
        <FaChevronLeft onClick={minusPage} />
      </StyledPageSpan>
      {createPagination()}
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
