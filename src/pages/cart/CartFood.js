import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";

function CartFood() {
  const { cartState } = useCart();
  const [cartFood, setCartFood] = useState([]);
  useEffect(() => {
    const cartFoodObject = cartState.cartItems.filter((item) => {
      return item.type === "food";
    });
    setCartFood(cartFoodObject);
  }, [cartState.cartItems]);
  const createDom = () =>
    cartFood.map((v) => {
      return <CartProductCard key={v.id} type={"food"} item={v} />;
    });

  return <>{createDom()}</>;
}

export default CartFood;
