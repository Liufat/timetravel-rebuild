import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";
import CartButton from "./CartButton";
import Loading from "../../ui/Loading";

function CartFood() {
  const { cartFoodState } = useCart();

  const [cartFood, setCartFood] = useState({ cartItems: [], isLoading: true });
  useEffect(() => {
    setCartFood({ cartItems: cartFoodState, isLoading: false });
  }, [cartFoodState]);

  const createCartFood = () => {
    if (cartFood.cartItems.length === 0) {
      return (
        <div className="d-flex w-100 justify-content-center py-5">
          <h1 className="m-3">您的美食購物車是空的喔！</h1>
        </div>
      );
    } else {
      return cartFood.cartItems.map((v) => {
        return <CartProductCard key={v.id} type={"food"} item={v} />;
      });
    }
  };

  const createDom = () => {
    if (cartFood.isLoading) {
      return <Loading />;
    }
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
