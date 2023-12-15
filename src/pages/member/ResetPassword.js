import React from "react";
import MemberFormWrap from "./MemberFormWrap";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import Button from "../../ui/Button";

function ResetPassword() {
  const { register } = useForm();
  return (
    <MemberFormWrap>
      <h1>重設密碼</h1>
      <form className="d-flex flex-column gap-5 col-12 col-md-6 ">
        <Input
          label="oldPassword"
          type="password"
          placeholder="請輸入舊密碼"
          register={register}
        >
          舊密碼
        </Input>
        <Input
          label="newPassword"
          type="password"
          placeholder="8位以上英數密碼，請區分大小寫"
          register={register}
        >
          新密碼
        </Input>
        <Input
          label="newPasswordCheck"
          type="password"
          placeholder="請輸入相同密碼"
          register={register}
        >
          再次輸入新密碼
        </Input>
        <div className="d-flex justify-content-center">
          <Button type="green" className="px-3 py-1">
            確定
          </Button>
        </div>
      </form>
    </MemberFormWrap>
  );
}

export default ResetPassword;
