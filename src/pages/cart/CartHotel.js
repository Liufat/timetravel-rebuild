import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";

function CartHotel() {
  const { cartState } = useCart();
  const [cartHotel, setCartHotel] = useState([]);
  useEffect(() => {
    const cartHotelObject = cartState.cartItems.filter((item) => {
      return item.type === "hotel";
    });
    setCartHotel(cartHotelObject);
  }, [cartState.cartItems]);

  const createDom = () =>
    cartHotel.map((v) => {
      return <CartProductCard key={v.id} type={"hotel"} item={v} />;
    });

  return (
    <>
      {createDom()}
      <div></div>
    </>
  );
}

export default CartHotel;
