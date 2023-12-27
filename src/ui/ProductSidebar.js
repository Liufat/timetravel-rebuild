import React from "react";
import { useSearch } from "../context/SearchContext";
import Input from "./Input";

function ProductSidebar() {
  const { searchState, changeDestination, changeCollect, changeKeyword } =
    useSearch();

  return (
    <div className="d-flex flex-column gap-4">
      <div className="d-flex flex-column gap-3 box-shadow px-4 py-3">
        <h1>關鍵字搜尋</h1>
        <div className="ps-2 d-flex flex-column">
          <Input
            inputType="text"
            placeholder="請輸入關鍵字"
            value={searchState.filter.keyword}
            onChange={changeKeyword}
          />
        </div>
      </div>
      <div className="d-flex flex-column gap-3 box-shadow px-4 py-3">
        <h1>篩選目的地</h1>
        <div className="ps-2 d-flex flex-column">
          <Input
            inputType="radio"
            label={"destination--0"}
            name={"destination"}
            value={"全部"}
            onChange={changeDestination}
            checked={searchState.filter.destination}
          />
          <Input
            inputType="radio"
            label={"destination--1"}
            name={"destination"}
            value={"基隆市"}
            onChange={changeDestination}
            checked={searchState.filter.destination}
          />
          <Input
            inputType="radio"
            label={"destination--2"}
            name={"destination"}
            value={"台北市"}
            onChange={changeDestination}
            checked={searchState.filter.destination}
          />
          <Input
            inputType="radio"
            label={"destination--3"}
            name={"destination"}
            value={"新北市"}
            onChange={changeDestination}
            checked={searchState.filter.destination}
          />
        </div>
      </div>
      <div className="d-flex flex-column gap-3 box-shadow px-4 py-3">
        <h1>收藏</h1>
        <div className="ps-2">
          <Input
            inputType="radio"
            label={"collect--0"}
            name={"collect"}
            value={"無設定範圍"}
            onChange={changeCollect}
            checked={true}
          />
          <Input
            inputType="radio"
            label={"collect--1"}
            name={"collect"}
            value={"0~50"}
            onChange={changeCollect}
          />
          <Input
            inputType="radio"
            label={"collect--2"}
            name={"collect"}
            value={"51~100"}
            onChange={changeCollect}
          />
          <Input
            inputType="radio"
            label={"collect--3"}
            name={"collect"}
            value={"101~150"}
            onChange={changeCollect}
          />
          <Input
            inputType="radio"
            label={"collect--4"}
            name={"collect"}
            value={"151~200"}
            onChange={changeCollect}
          />
          <Input
            inputType="radio"
            label={"collect--5"}
            name={"collect"}
            value={"201以上"}
            onChange={changeCollect}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductSidebar;
