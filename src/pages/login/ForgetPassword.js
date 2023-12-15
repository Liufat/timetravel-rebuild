import React from "react";
import LoginFormWrap from "./LoginFormWrap";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Input from "../../ui/Input";

function ForgetPassword() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginFormWrap>
      <div className="d-flex flex-column gap-3 align-items-center pb-xl-5">
        <h1>忘記密碼</h1>
        <h2>請輸入註冊時的Email</h2>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-4"
      >
        <div className="d-flex flex-column">
          <Input
            label="email"
            type="email"
            placeholder="example@gmail.com"
            register={register}
          >
            Email
          </Input>
        </div>
        <div className="d-flex justify-content-center pt-5">
          <Button type="green" className="px-4 px-md-5 py-2">
            確定
          </Button>
        </div>
      </form>
    </LoginFormWrap>
  );
}

export default ForgetPassword;
