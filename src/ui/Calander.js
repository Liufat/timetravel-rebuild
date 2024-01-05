import React, { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import PreArrow from "./PreArrow";
import NextArrow from "./NextArrow";

const StyledWeek = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-bottom: 1px solid var(--color-grey);
  & div {
    text-align: center;
  }
`;

const StyledDate = styled.div`
  height: 12rem;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  & button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 30px;
    background-color: transparent;
    color: var(--color-dark-grey);

    &.active {
      & div {
        width: 30px;
        height: 30px;
        border-radius: 50% 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--color-primary);
        color: var(--color-white);
      }
    }

    & div {
      width: 30px;
      height: 30px;
      border-radius: 50% 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      &:hover {
        background-color: var(--color-primary);
        color: var(--color-white);
      }
    }

    &:disabled div {
      background-color: transparent;
      color: var(--color-grey);
      cursor: not-allowed;
    }
  }
`;

function Calander({
  className,
  initialValue,
  value,
  setValue,
  min = new Date(),
  max,
  endDate,
}) {
  const currentDate = new Date();
  const nowYear = currentDate.getFullYear();
  const nowMonth = currentDate.getMonth();

  const [monthState, setMonthState] = useState(nowMonth);
  const [yearState, setYearState] = useState(nowYear);

  const monthName = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月",
  ];

  const isLeapYear = (year) => {
    return (
      (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    );
  };

  const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
  };

  const generateCalander = (year, month) => {
    const dateCount = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ][month];

    return new Array(dateCount).fill(1);
  };

  const firstDay = (year, month) => {
    return new Array(new Date(year, month, 1).getDay()).fill("");
  };

  const changeMonth = (type) => {
    if (type === "minus") {
      if (monthState > 0) {
        setMonthState(monthState - 1);
      } else {
        setMonthState(11);
        setYearState(yearState - 1);
      }
    }
    if (type === "plus") {
      if (monthState < 11) {
        setMonthState(monthState + 1);
      } else {
        setMonthState(0);
        setYearState(yearState + 1);
      }
    }
  };

  const generateButton = () => {
    const minYear = new Date(min).getFullYear();
    const minMonth = new Date(min).getMonth();
    const minDate = new Date(min).getDate();

    const maxYear = new Date(max).getFullYear();
    const maxMonth = new Date(max).getMonth();
    const maxDate = new Date(max).getDate();

    return generateCalander(yearState, monthState).map((v, i) => {
      if (yearState === minYear && monthState === minMonth && i + 1 < minDate) {
        return (
          <button key={`${yearState}${monthState}/${i}`} disabled>
            <div>{i + 1}</div>
          </button>
        );
      } else if (
        yearState === maxYear &&
        monthState === maxMonth &&
        i + 1 > maxDate
      ) {
        return (
          <button key={`${yearState}${monthState}/${i}`} disabled>
            <div>{i + 1}</div>
          </button>
        );
      } else if (yearState < minYear || yearState > maxYear) {
        return (
          <button key={`${yearState}${monthState}/${i}`} disabled>
            <div>{i + 1}</div>
          </button>
        );
      } else if (yearState === minYear && monthState < minMonth) {
        return (
          <button key={`${yearState}${monthState}/${i}`} disabled>
            <div>{i + 1}</div>
          </button>
        );
      } else if (yearState === maxYear && monthState > maxMonth) {
        return (
          <button key={`${yearState}${monthState}/${i}`} disabled>
            <div>{i + 1}</div>
          </button>
        );
      } else {
        return (
          <button
            key={`${yearState}${monthState}/${i}`}
            onClick={() => {
              setValue(new Date(yearState, monthState, i + 1));
            }}
            className={
              value.getDate() === i + 1 || endDate.getDate() >= i + 1
                ? "active"
                : ""
            }
          >
            <div>{i + 1}</div>
          </button>
        );
      }
    });
  };

  return (
    <div className={`d-flex flex-column ${className} `}>
      <div className="w-100 d-flex justify-content-between align-items-center px-4 pt-4 pb-2">
        <span
          onClick={() => {
            changeMonth("minus");
          }}
          className="pointer"
        >
          <PreArrow />
        </span>
        <div>
          <h1>{monthName[monthState]}</h1>
          <p className="text-center">{yearState}</p>
        </div>
        <span
          onClick={() => {
            changeMonth("plus");
          }}
          className="pointer"
        >
          <NextArrow />
        </span>
      </div>
      <div className="d-flex flex-column align-items-around px-3 ">
        <StyledWeek className="pb-1 mb-3">
          <div>日</div>
          <div>一</div>
          <div>二</div>
          <div>三</div>
          <div>四</div>
          <div>五</div>
          <div>六</div>
        </StyledWeek>
        <StyledDate>
          {firstDay(yearState, monthState).map((v, i) => {
            return <div key={i}>{v}</div>;
          })}
          {generateButton()}
        </StyledDate>
      </div>
      <div className="w-100 d-flex justify-content-center gap-4 py-3">
        <Button
          onClick={() => {
            setValue(initialValue);
          }}
          className="btn-secondary px-4 py-1"
        >
          清除
        </Button>
      </div>
    </div>
  );
}

export default Calander;
