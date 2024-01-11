import React, { useEffect, useState } from "react";
import CartProductCard from "../../ui/CartProductCard";
import { useCart } from "../../context/CartContext";
import CartButton from "./CartButton";
import Loading from "../../ui/Loading";

function CartTicket() {
  const { cartState } = useCart();
  const [cartTicket, setCartTicket] = useState({
    cartItems: [],
    isLoading: true,
  });
  useEffect(() => {
    const cartTicketObject = cartState.cartItems.filter((item) => {
      return item.type === "ticket";
    });
    setCartTicket({ cartItems: cartTicketObject, isLoading: false });
  }, [cartState.cartItems]);

  const createCartTicket = () =>
    cartTicket.cartItems.map((v) => {
      return <CartProductCard key={v.id} type={"ticket"} item={v} />;
    });

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
