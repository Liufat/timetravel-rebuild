import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";
import Button from "../../ui/Button";
import CartButton from "./CartButton";

function CartFood() {
  const { cartState } = useCart();
  const [cartFood, setCartFood] = useState([]);
  useEffect(() => {
    const cartFoodObject = cartState.cartItems.filter((item) => {
      return item.type === "food";
    });
    setCartFood(cartFoodObject);
  }, [cartState.cartItems]);

  const createCartFood = () =>
    cartFood.map((v) => {
      return <CartProductCard key={v.id} type={"food"} item={v} />;
    });

  const createDom = () => {
    return (
      <>
        {createCartFood()}
        <div className="d-flex justify-content-center gap-5">
          <CartButton />
        </div>
      </>
    );
  };

  return <>{createDom()}</>;
}

export default CartFood;
