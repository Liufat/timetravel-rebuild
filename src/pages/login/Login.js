import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import LoginFormWrap from "./LoginFormWrap";
import { useMember } from "./useMember";
import { useMemberContext } from "../../context/MemberContext";

function Login() {
  const { register, handleSubmit, formState } = useForm();
  const navigate = useNavigate();
  const { setMember } = useMemberContext();

  // 錯誤處理
  const { errors } = formState; //react-hook-form的錯誤處理，主要處理如必填未填等狀況
  const [error, setError] = useState(); //額外的錯誤處理，主要處理帳號密碼錯誤登入失敗的狀況

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

  // 產生input表格
  const generateInput = () => {
    return inputArray.map((v) => (
      <Input
        label={v.label}
        type={v.type}
        placeholder={v.placeholder}
        register={register}
        key={v.label}
        error={errors?.[v.label]?.message}
      >
        {v.content}
      </Input>
    ));
  };

  // 提交登入表單
  const onSubmit = (formData) => {
    useMember.login(formData).then((result) => {
      if (result.success === true) {
        //若登入成功則導向前一個頁面
        setMember(result.auth);
        navigate(-1);
      } else {
        setError("帳號或密碼錯誤，請重新輸入"); //若失敗，更新error內容
      }
    });
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
          {error && ( //若有error，顯示error訊息
            <div>
              <span className="text-color-danger">{error}</span>
            </div>
          )}
          <div className="w-100 d-flex justify-content-end">
            <NavLink to="/forget-password">
              <span className="text-color-primary">忘記密碼？</span>
            </NavLink>
          </div>
        </div>

        <div className="d-flex justify-content-center">
          <Button className="px-4 px-md-5 py-2 btn-primary">登入</Button>
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
