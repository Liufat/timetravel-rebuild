import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../../ui/Input";
import CartButton from "./CartButton";
import { useCart } from "../../context/CartContext";
import useCartFilter from "../../hooks/useCartFilter";
import CartSidebar from "./CartSidebar";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useCartPage } from "../../context/CartPageContext";
import { ECPAY_API, LINE_PAY_API, MAKE_ORDER_API } from "./../../server/config";

import axios from "axios";

function CartInformCheck() {
  const { nextPage } = useCartPage();
  const { sid: member_sid } = useLocalStorage.get("member");

  const [payMethod, setPayMethod] = useState("LinePay");
  const [repName, setNepName] = useState("");
  const [repMobile, setRepMobile] = useState("");
  const [repEmail, setRepEmail] = useState("");
  const [repID, setRepID] = useState("");

  const { cartState } = useCart();
  const cartFilter = useCartFilter;

  const createCheck = () => {
    return <CartSidebar />;
  };

  async function Linepay(uuid) {
    const response = await axios.get(LINE_PAY_API(uuid));
    const url = response.data.payUrl;
    return url;
  }

  async function EcPay(uuid) {
    const response = (await axios.get(ECPAY_API(uuid))).data.htm;
    if (response) {
      document.open();
      document.write(response);
      document.close();
    } else {
      window.location = "http://localhost:3000/cart/fail";
    }
  }

  const onSubmit = async () => {
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
    const { data } = await axios.post(MAKE_ORDER_API, cartData);
    const uuid = data.paymentId;
    // console.log(data);
    if (data.success) {
      localStorage.removeItem("TimeTravelCart");
      if (payMethod === "LinePay") {
        const payUrl = await Linepay(uuid);
        window.location = payUrl;
      }

      if (payMethod === "Credit") {
        await EcPay(uuid);
      }
    }
    // nextPage();
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

  const createPayMethod = () => {
    return (
      <div className="p-3 my-5 box-shadow">
        <form>
          <div className="d-flex flex-column gap-3">
            <h1>請選擇結帳方式</h1>
            <div className="m-3">
              <div className="pb-5">
                <label
                  onClick={() => {
                    setPayMethod("LinePay");
                  }}
                >
                  <input type={"radio"} name={"paytype"} />
                  <span className="btn btn-primary mx-2">LinePay</span>
                </label>
              </div>
              <div className="pb-5">
                <label
                  onClick={() => {
                    setPayMethod("Credit");
                  }}
                >
                  <input type={"radio"} name={"paytype"} />
                  <span className="btn btn-primary mx-2">信用卡一次付清</span>
                </label>
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
      {createPayMethod()}
      <div className="d-flex justify-content-center gap-5">
        <CartButton onSubmit={onSubmit} />
      </div>
    </>
  );
}

export default CartInformCheck;
