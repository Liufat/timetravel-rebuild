import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";
import CartButton from "./CartButton";

function CartHotel() {
  const { cartState } = useCart();
  const [cartHotel, setCartHotel] = useState([]);
  useEffect(() => {
    const cartHotelObject = cartState.cartItems.filter((item) => {
      return item.type === "hotel";
    });
    setCartHotel(cartHotelObject);
  }, [cartState.cartItems]);

  const createCartHotel = () =>
    cartHotel.map((v) => {
      return <CartProductCard key={v.id} type={"hotel"} item={v} />;
    });

  const createDom = () => {
    return (
      <>
        {createCartHotel()}
        <div className="d-flex justify-content-center gap-5">
          <CartButton />
        </div>
      </>
    );
  };

  return (
    <>
      {createDom()}
      <div></div>
    </>
  );
}

export default CartHotel;
