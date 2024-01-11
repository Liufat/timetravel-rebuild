import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";
import CartButton from "./CartButton";
import Loading from "../../ui/Loading";

function CartFood() {
  const { cartState } = useCart();
  const [cartFood, setCartFood] = useState({ cartItems: [], isLoading: true });
  useEffect(() => {
    const cartFoodObject = cartState.cartItems.filter((item) => {
      return item.type === "food";
    });
    setCartFood({ cartItems: cartFoodObject, isLoading: false });
  }, [cartState.cartItems]);

  const createCartFood = () =>
    cartFood.cartItems.map((v) => {
      return <CartProductCard key={v.id} type={"food"} item={v} />;
    });

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
