import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";

const StyledSection = styled.section`
  background-color: var(--color-white);
  border-radius: var(--border-redius);
  padding: 8rem 0rem;
`;

function Login() {
  const { register } = useForm();

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
        className="pt-5"
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

  return (
    <StyledSection className="col-10 col-md-5 col-xl-4 d-flex justify-content-center align-items-center ">
      <div className="d-flex flex-column col-11 col-md-8 col-xl-7 gap-md-2">
        <div className="d-flex flex-column align-items-center">
          <h1>登入</h1>
        </div>
        <form className="d-flex flex-column gap-4">
          <div className="d-flex flex-column">
            {generateInput()}
            <div className="w-100 d-flex justify-content-end">
              <NavLink to="/login/forgetpassword">
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
            <NavLink to="/login/register">
              <span className="text-color-primary">立即註冊</span>
            </NavLink>
          </div>
        </form>
      </div>
    </StyledSection>
  );
}

export default Login;
