import React, { useEffect, useState } from "react";
import CartProductCard from "../../ui/CartProductCard";
import { useCart } from "../../context/CartContext";
import CartButton from "./CartButton";

function CartTicket() {
  const { cartState } = useCart();
  const [cartTicket, setCartTicket] = useState([]);
  useEffect(() => {
    const cartTicketObject = cartState.cartItems.filter((item) => {
      return item.type === "ticket";
    });
    setCartTicket(cartTicketObject);
  }, [cartState.cartItems]);

  const createCartTicket = () =>
    cartTicket.map((v) => {
      return <CartProductCard key={v.id} type={"ticket"} item={v} />;
    });

  const createDom = () => {
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
