import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Button from "./Button";
function ProductSidebar({ className }) {
  return (
    <div className={className}>
      <div className="d-flex flex-column gap-2">
        <h2>選擇張數</h2>
        <div className="d-flex justify-content-center gap-5 align-items-center">
          <h2>
            <FaMinusCircle />
          </h2>
          <h2 className="pt-1">1</h2>
          <h2>
            <FaCirclePlus className="text-color-primary" />
          </h2>
        </div>
      </div>
      <div>
        <h2 className="text-color-grey">
          <del>TWD$899</del>
        </h2>
        <h1 className="text-color-primary">TWD$599</h1>
      </div>
      <div className="d-flex justify-content-center gap-3 w-100">
        <Button className=" btn-secondary py-2 px-1 ">
          <p>加入購物車</p>
        </Button>
        <Button className=" btn-primary py-2 px-1">
          <p>立即購買</p>
        </Button>
      </div>
    </div>
  );
}

export default ProductSidebar;
