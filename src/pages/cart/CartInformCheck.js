import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import CartButton from "./CartButton";
import { useCart } from "../../context/CartContext";
import useCartFilter from "../../hooks/useCartFilter";
import CartSidebar from "./CartSidebar";
import { useMutation } from "@tanstack/react-query";
import { makeOrder } from "../../server/cartApi";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useCartPage } from "../../context/CartPageContext";

function CartInformCheck() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { nextPage } = useCartPage();
  const { sid: member_sid } = useLocalStorage.get("member");

  const [repName, setNepName] = useState("");
  const [repMobile, setRepMobile] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [repID, setRepID] = useState("");

  const { cartState } = useCart();
  const cartFilter = useCartFilter;

  // console.log(cartData);
  const { mutate, isLoading } = useMutation({
    mutationFn: makeOrder,
    onSuccess: () => {
      console.log("success");
    },
    onError: (err) => console.error(err.message),
  });

  const createCheck = () => {
    return <CartSidebar />;
  };

  const onSubmit = () => {
    const cartData = {
      order: {
        member_sid,
        orders_total_price: cartState.cartItems.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        ),
        repName,
        repMobile,
      },
      hotel: cartFilter(cartState, "hotel") || [],
      food: cartFilter(cartState, "food") || [],
      ticket: cartFilter(cartState, "ticket") || [],
    };
    // mutate(cartData);
    nextPage();
  };

  const createForm = () => {
    return (
      <div className="p-3 my-5 box-shadow">
        <form>
          <div className="d-flex flex-column gap-3">
            <h1>購買人資料</h1>
            <div className="d-flex flex-column gap-4 p-3">
              <div className="d-flex gap-5">
                <Input
                  inputType="text"
                  label="repName"
                  value={repName}
                  onChange={setNepName}
                  placeholder="請輸入姓名"
                >
                  訂單聯絡人
                </Input>
                <Input
                  inputType="text"
                  label="repMobile"
                  placeholder="請輸入正確的電話號碼"
                  value={repMobile}
                  onChange={setRepMobile}
                >
                  手機號碼
                </Input>
              </div>
              <div className="d-flex gap-5">
                <Input
                  inputType="text"
                  label="repEmail"
                  placeholder="example@mail.com"
                  value={repEmail}
                  onChange={setRepEmail}
                >
                  Email
                </Input>
                <Input
                  inputType="text"
                  label="repID"
                  placeholder="外籍人士請輸入護照號碼"
                  value={repID}
                  onChange={setRepID}
                >
                  身分證字號/護照號碼
                </Input>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  };

  return (
    <>
      {createCheck()}
      {createForm()}
      <div className="d-flex justify-content-center gap-5">
        <CartButton onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default CartInformCheck;
