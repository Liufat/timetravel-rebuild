import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  transition: all 0.2s;
  border: 1px solid var(--color-grey);
  color: var(--color-black);
  &::placeholder {
    color: var(--color-grey);
    font-size: var(--font-size-h2);
    @media screen and (min-width: 1200px) {
      font-size: var(--font-size-h1);
    }
  }
  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
`;

function Input({
  label,
  type = "text",
  placeholder = "",
  children,
  register,
  className,
  error, //接收react-hook-form的錯誤訊息
}) {
  return (
    <div className={`d-flex flex-column ${className} `}>
      <label htmlFor={label}>
        <span>{children}</span>
      </label>
      <StyledInput
        className="px-3 py-2"
        type={type}
        id={label}
        placeholder={placeholder}
        {...register(label, { required: "此欄位為必填" })}
      />
      <div className="text-color-danger">
        <span>{error}</span>
      </div>
    </div>
  );
}

export default Input;
