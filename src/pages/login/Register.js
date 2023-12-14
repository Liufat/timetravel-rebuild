import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Input from "../../ui/Input";
import Button from "../../ui/Button";
import { NavLink } from "react-router-dom";

const StyledSection = styled.section`
  background-color: var(--color-white);
  border-radius: var(--border-redius);

  @media screen and (min-width: 1200px) {
    padding: 8rem 0rem;
  }
`;

function Login() {
  const { register, handleSubmit } = useForm();

  const inputArray = [
    { label: "name", type: "text", placeholder: "王小明", content: "姓名" },
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
    {
      label: "confirmPassword",
      type: "password",
      placeholder: "請輸入相同的密碼",
      content: "再次輸入密碼",
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
    <StyledSection className="col-10 col-md-5 col-xl-4 d-flex justify-content-evenly justify-content-md-center align-items-center">
      <div className="d-flex flex-column col-11 col-md-8 col-xl-7 gap-md-2">
        <div className="d-flex flex-column align-items-center">
          <h1>創建帳戶</h1>
          <h2>使用e-mail註冊</h2>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column gap-4"
        >
          <div className="d-flex flex-column gap-3">{generateInput()}</div>
          <div className="d-flex justify-content-center">
            <Button type="green" className="px-4 px-md-5 py-2">
              註冊
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <span>或是已有帳戶？</span>
            <NavLink to="/login/login">
              <span className="text-color-primary">登入</span>
            </NavLink>
          </div>
        </form>
      </div>
    </StyledSection>
  );
}

export default Login;
