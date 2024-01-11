import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";
import CartButton from "./CartButton";
import Loading from "../../ui/Loading";

function CartHotel() {
  const { cartState } = useCart();
  const [cartHotel, setCartHotel] = useState({
    cartItems: [],
    isLoading: true,
  });
  useEffect(() => {
    const cartHotelObject = cartState.cartItems.filter((item) => {
      return item.type === "hotel";
    });
    setCartHotel({ cartItems: cartHotelObject, isLoading: false });
  }, [cartState.cartItems]);

  const createCartHotel = () =>
    cartHotel.cartItems.map((v) => {
      return <CartProductCard key={v.id} type={"hotel"} item={v} />;
    });

  const createDom = () => {
    if (cartHotel.isLoading) {
      return <Loading />;
    }
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
