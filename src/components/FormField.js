import React from "react";

export default function FormField({ title, type, controller }) {
  return (
    <fieldset>
      <legend>{title}</legend>
      <input type={type} {...controller} />
    </fieldset>
  );
}
