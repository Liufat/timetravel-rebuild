import React, { useEffect, useState } from "react";
import CartProductCard from "../../ui/CartProductCard";
import { useCart } from "../../context/CartContext";

function CartTicket() {
  const { cartState } = useCart();
  const [cartTicket, setCartTicket] = useState([]);
  useEffect(() => {
    const cartTicketObject = cartState.cartItems.filter((item) => {
      return item.type === "ticket";
    });
    setCartTicket(cartTicketObject);
  }, [cartState.cartItems]);
  const createDom = () =>
    cartTicket.map((v) => {
      return <CartProductCard key={v.id} type={"ticket"} item={v} />;
    });

  return <>{createDom()}</>;
}

export default CartTicket;
