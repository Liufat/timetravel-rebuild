import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import LoginFormWrap from "./LoginFormWrap";

function Login() {
  const { register, handleSubmit } = useForm();

  const inputArray = [
    {
      label: "email",
      type: "email",
      placeholder: "example@gmail.com",
      content: "Email",
    },
    {
      label: "password",
      type: "password",
      placeholder: "8位以上英數密碼，區分大小寫",
      content: "密碼",
    },
  ];

  const generateInput = () => {
    return inputArray.map((v) => (
      <Input
        label={v.label}
        type={v.type}
        placeholder={v.placeholder}
        register={register}
        key={v.label}
      >
        {v.content}
      </Input>
    ));
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <LoginFormWrap>
      <div className="d-flex flex-column align-items-center">
        <h1>登入</h1>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-4"
      >
        <div className="d-flex flex-column gap-4">
          {generateInput()}
          <div className="w-100 d-flex justify-content-end">
            <NavLink to="/forget-password">
              <span className="text-color-primary">忘記密碼？</span>
            </NavLink>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button type="green" className="px-4 px-md-5 py-2">
            登入
          </Button>
        </div>
        <div className="d-flex justify-content-center">
          <span>還沒註冊？</span>
          <NavLink to="/register">
            <span className="text-color-primary">立即註冊</span>
          </NavLink>
        </div>
      </form>
    </LoginFormWrap>
  );
}

export default Login;
