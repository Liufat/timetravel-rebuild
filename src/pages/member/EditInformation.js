import React from "react";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import picture from "./../../image/img/itinerary_home.jpg";
import Button from "../../ui/Button";
import MemberFormWrap from "./MemberFormWrap";

const StyledPictureWrap = styled.div`
  width: 10rem;
  height: 10rem;
  border: transparent;
  border-radius: 50%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media screen and (min-width: 1200px) {
    width: 15rem;
    height: 15rem;
  }
`;

function EditInformation() {
  const { register, handleSubmit } = useForm();

  return (
    <MemberFormWrap>
      <h1>修改個人資訊</h1>
      <StyledPictureWrap style={{ backgroundImage: `url(${picture})` }} />

      <form className="d-flex flex-column gap-3 col-12 col-md-6 ">
        <Input label="name" placeholder="請輸入姓名" register={register}>
          姓名
        </Input>
        <Input label="number" placeholder="09xx-xxx-xxx" register={register}>
          手機號碼
        </Input>
        <div className="d-flex justify-content-center">
          <Button type="green" className="px-3 py-1">
            儲存
          </Button>
        </div>
      </form>
    </MemberFormWrap>
  );
}

export default EditInformation;
