import React from "react";
import styled from "styled-components";

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
  min,
  max,
}) {
  if (inputType === "form") {
    return (
      <div className={`d-flex flex-column ${className} `}>
        <label htmlFor={label}>
          <span>{children}</span>
        </label>
        <input
          className="px-3 py-2 input-text"
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
        <input
          className="px-3 py-2 input-text"
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
  if (inputType === "date") {
    return (
      <div className={`d-flex flex-column ${className} `}>
        <label htmlFor={label}>
          <span>{children}</span>
        </label>
        <input
          className="px-3 py-2 input-text"
          type={type}
          id={label}
          value={value}
          onChange={onChange}
          max={max}
          min={min}
        />
      </div>
    );
  }
}

export default Input;
