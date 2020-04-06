import React from "react";
import styled from "styled-components";

export default function FormField({
  title,
  type,
  controller,
  placeholder,
  required = true,
}) {
  return (
    <Wrapper>
      <legend>{title}</legend>
      <input
        type={type}
        {...controller}
        placeholder={placeholder}
        required={required}
      />
    </Wrapper>
  );
}

const Wrapper = styled.fieldset`
  font-size: 16px;
  margin-bottom: 21px;
  &:last-of-type {
    margin-bottom: 0;
  }
  & legend {
    margin-bottom: 10px;
  }
  & input {
    width: 100%;
    padding: 0 5px;
    height: 40px;
    border: 0;
    padding: 0 10px;
  }
`;
