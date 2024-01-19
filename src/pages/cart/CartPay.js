import React, { useState } from "react";
import CartButton from "./CartButton";

function CartPay() {
  const [payMethod, setPayMethod] = useState("LinePay");

  const onSubmit = async()=>{
    // if (payMethod === 'LinePay') {
    //   const payUrl = await Linepay(uuid);
    //   window.location = payUrl;
    // }

    // if (payMethod === 'Credit') {
    //   await EcPay(uuid);
    // }
  }

  return (
    <>
      <div>
        <div>
          <h1>請選擇結帳方式</h1>
        </div>
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
      <div className="d-flex justify-content-center gap-5">
        <CartButton />
      </div>
    </>
  );
}

export default CartPay;
