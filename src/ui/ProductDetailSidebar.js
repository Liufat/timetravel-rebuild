import React from "react";
import { FaMinusCircle } from "react-icons/fa";
import { FaCirclePlus } from "react-icons/fa6";
import Button from "./Button";
import styled from "styled-components";
import { useCart } from "../context/CartContext";
import { MY_HOST } from "../server/config";

const StyledButton = styled.button`
  background-color: transparent;
  color: var(--color-primary);
  &:disabled {
    color: var(--color-grey);
  }
`;

function ProductDetailSidebar({
  type,
  productName,
  sid,
  className,
  originalPrice,
  price,
  quantityMinusOne,
  quantityPlusOne,
  quantity,
  chozenType,
  startDate,
  endDate,
  image,
}) {
  const { addCart } = useCart();

  const handleAddCart = () => {
    addCart({
      type,
      image: `${MY_HOST}/uploads/${type}/${image}`,
      id: sid,
      productName,
      chozenType,
      price: price,
      quantity,
      startDate,
      endDate,
    });
  };

  return (
    <div className={className}>
      <div className="d-flex flex-column gap-2">
        <h2>選擇張數</h2>
        <div className="d-flex justify-content-center gap-5 align-items-center">
          <StyledButton onClick={quantityMinusOne} disabled={quantity === 1}>
            <h2>
              <FaMinusCircle />
            </h2>
          </StyledButton>
          <h2 className="pt-1">{quantity}</h2>
          <StyledButton onClick={quantityPlusOne}>
            <h2>
              <FaCirclePlus className="text-color-primary" />
            </h2>
          </StyledButton>
        </div>
      </div>
      <div>
        {originalPrice && (
          <h2 className="text-color-grey">
            <del>TWD${originalPrice}</del>
          </h2>
        )}
        <h1 className="text-color-primary">TWD${price}</h1>
      </div>
      <div className="d-flex justify-content-center gap-3 w-100">
        <Button className=" btn-secondary py-2 px-1 " onClick={handleAddCart}>
          <p>加入購物車</p>
        </Button>
        <Button className=" btn-primary py-2 px-1">
          <p>立即購買</p>
        </Button>
      </div>
    </div>
  );
}

export default ProductDetailSidebar;
