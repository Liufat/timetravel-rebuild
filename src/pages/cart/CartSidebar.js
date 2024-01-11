import React from "react";
import { useCart } from "../../context/CartContext";
import Button from "../../ui/Button";
import useCartFilter from "../../hooks/useCartFilter";

function CartSidebar({ className }) {
  const { cartState } = useCart();

  const hotelItems = useCartFilter(cartState, "hotel") || [];
  const foodItems = useCartFilter(cartState, "food") || [];
  const ticketItems = useCartFilter(cartState, "ticket") || [];

  const createSidebar = (item) => {
    const { productName, chozenType, price, quantity } = item;
    return (
      <div key={productName} className="px-3 py-2">
        <div className="d-flex justify-content-between pb-2">
          <span className="col-4 text-nowrap ">{productName}</span>
          <span className="col-4 text-center text-nowrap">{`X${quantity}`}</span>
          <span className="col-4  text-end text-nowrap">{`TWD$${
            price * quantity
          }`}</span>
        </div>
        {chozenType && (
          <Button className={"btn-primary py-1 px-3"}>{chozenType}</Button>
        )}
      </div>
    );
  };

  const createSidebarContent = (items, type) => {
    return <>{items.map((item) => createSidebar(item))}</>;
  };

  const createSidebarCardTitle = (items, type) => {
    return (
      <>
        {type === "hotel" && <p className="text-bold">住宿</p>}
        {type === "food" && <p className="text-bold">美食</p>}
        {type === "ticket" && <p className="text-bold">票券</p>}
        {createSidebarContent(items, type)}
      </>
    );
  };

  const createSidebarCard = (items, type) => {
    const totalPrice = items.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    return (
      <>
        <div className="px-3 py-4">
          {createSidebarCardTitle(items, type)}
          <div className="my-3 border-top py-3 pe-3 d-flex justify-content-between">
            <span className="text-bold">小計</span>
            <span className="text-color-primary text-bold">{`TWD$${totalPrice}`}</span>
          </div>
        </div>
      </>
    );
  };

  const createSidebarCardByType = () => {
    const totalPrice = cartState.cartItems.reduce(
      (acc, cur) => acc + cur.price * cur.quantity,
      0
    );
    return (
      <div className={className}>
        <div className="box-shadow p-3">
          <h1>價格明細</h1>
          {hotelItems.length !== 0 && createSidebarCard(hotelItems, "hotel")}
          {foodItems.length !== 0 && createSidebarCard(foodItems, "food")}
          {ticketItems.length !== 0 && createSidebarCard(ticketItems, "ticket")}
          <div className="text-color-primary d-flex justify-content-between pb-5 px-3">
            <h1>總計</h1>
            <h1>{`TWD$${totalPrice}`}</h1>
          </div>
        </div>
      </div>
    );
  };
  return createSidebarCardByType();
}

export default CartSidebar;
