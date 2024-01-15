import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import CartButton from "./CartButton";
import { useCart } from "../../context/CartContext";
import useCartFilter from "../../hooks/useCartFilter";
import CartSidebar from "./CartSidebar";
import { useMutation } from "@tanstack/react-query";
import { makeOrder } from "../../server/cartApi";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import moment from "moment";

function CartInformCheck() {
  const { register, handleSubmit, reset, getValues, formState } = useForm();
  const { sid: member_sid } = useLocalStorage.get("member");
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
        repName: "生日哥",
        repMobile: "0912345678",
      },
      hotel: cartFilter(cartState, "hotel") || [],
      food: cartFilter(cartState, "food") || [],
      ticket: cartFilter(cartState, "ticket") || [],
    };
    mutate(cartData);
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
                  inputType="form"
                  label="contactor"
                  placeholder="請輸入姓名"
                  register={register}
                >
                  訂單聯絡人
                </Input>
                <Input
                  inputType="form"
                  label="mobileNumber"
                  placeholder="請輸入正確的電話號碼"
                  register={register}
                >
                  手機號碼
                </Input>
              </div>
              <div className="d-flex gap-5">
                <Input
                  inputType="form"
                  label="email"
                  placeholder="example@mail.com"
                  register={register}
                >
                  Email
                </Input>
                <Input
                  inputType="form"
                  label="id"
                  placeholder="外籍人士請輸入護照號碼"
                  register={register}
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
