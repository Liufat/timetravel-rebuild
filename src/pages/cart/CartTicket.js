import React, { useEffect, useState } from "react";
import CartProductCard from "../../ui/CartProductCard";
import { useCart } from "../../context/CartContext";
import CartButton from "./CartButton";
import Loading from "../../ui/Loading";

function CartTicket() {
  const { cartTicketState } = useCart();
  const [cartTicket, setCartTicket] = useState({
    cartItems: [],
    isLoading: true,
  });
  useEffect(() => {
    setCartTicket({ cartItems: cartTicketState, isLoading: false });
  }, [cartTicketState]);

  const createCartTicket = () => {
    if (cartTicket.cartItems.length === 0) {
      return (
        <div className="d-flex w-100 justify-content-center py-5">
          <h1 className="m-3">您的票券購物車是空的喔！</h1>
        </div>
      );
    } else {
      return cartTicket.cartItems.map((v) => {
        return <CartProductCard key={v.id} type={"ticket"} item={v} />;
      });
    }
  };

  const createDom = () => {
    if (cartTicket.isLoading) {
      return <Loading />;
    }
    return (
      <>
        {createCartTicket()}
        <div className="d-flex justify-content-center gap-5">
          <CartButton />
        </div>
      </>
    );
  };

  return <>{createDom()}</>;
}

export default CartTicket;
