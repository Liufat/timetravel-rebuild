import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  transition: all 0.2s;
  border: 1px solid var(--color-grey);
  color: var(--color-black);
  &::placeholder {
    color: var(--color-grey);
  }
  &:focus {
    outline: none;
    border: 1px solid var(--color-primary);
  }
`;

function Input({ label, type, placeholder, children, register }) {
  return (
    <div className="d-flex flex-column pb-3">
      <label for={label}>
        <span>{children}</span>
      </label>
      <StyledInput
        className="px-3 py-2"
        type={type}
        id={label}
        placeholder={placeholder}
        {...register("name", { required: "此欄位為避填" })}
      />
    </div>
  );
}

export default Input;
