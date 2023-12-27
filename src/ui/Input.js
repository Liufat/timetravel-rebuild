import React from "react";
import styled from "styled-components";

const StyledInputText = styled.input`
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

const StyleInputRadio = styled.input`
  appearance: none;
  position: relative;
  &:checked {
    &::before {
      content: "";
      width: 0.4rem;
      height: 1.2rem;
      background-color: var(--color-primary);
      position: absolute;
      left: -10px;
      top: -1rem;
    }
  }
`;

function Input({
  label,
  inputType = "text",
  type,
  placeholder = "",
  children,
  register = {},
  className,
  error, //接收react-hook-form的錯誤訊息
  name,
  value,
  onChange,
  checked,
}) {
  if (inputType === "form") {
    return (
      <div className={`d-flex flex-column ${className} `}>
        <label htmlFor={label}>
          <span>{children}</span>
        </label>
        <StyledInputText
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
  if (inputType === "radio") {
    return (
      <div>
        <StyleInputRadio
          type="radio"
          id={label}
          name={name}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          defaultChecked={checked === value}
        />
        <label className="pointer" htmlFor={label}>
          <p>{value}</p>
        </label>
      </div>
    );
  }
  if (inputType === "text") {
    return (
      <div className={`d-flex flex-column ${className} `}>
        <label htmlFor={label}>
          <span>{children}</span>
        </label>
        <StyledInputText
          className="px-3 py-2"
          type={type}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
          }}
        />
      </div>
    );
  }
}

export default Input;
