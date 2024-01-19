import React, { useEffect, useState } from "react";
import { useCart } from "../../context/CartContext";
import CartProductCard from "../../ui/CartProductCard";
import CartButton from "./CartButton";
import Loading from "../../ui/Loading";

function CartHotel() {
  const { cartHotelState } = useCart();
  const [cartHotel, setCartHotel] = useState({
    cartItems: [],
    isLoading: true,
  });
  useEffect(() => {
    setCartHotel({ cartItems: cartHotelState, isLoading: false });
  }, [cartHotelState]);

  const createCartHotel = () => {
    if (cartHotel.cartItems.length === 0) {
      return (
        <div className="d-flex w-100 justify-content-center py-5">
          <h1 className="m-3">您的住宿購物車是空的喔！</h1>
        </div>
      );
    } else {
      return cartHotel.cartItems.map((v) => {
        return <CartProductCard key={v.id} type={"hotel"} item={v} />;
      });
    }
  };
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
