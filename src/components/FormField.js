import React from 'react';
import propTypes from 'prop-types';

export default function FormField({
  title,
  type,
  value,
  onChange,
  placeholder,
  isRequired = true
}) {
  const onChangeHandler = (e) => {
    onChange(e.target.value);
  }
  return (
    <fieldset>
      <legend>{title}</legend>
      <input
        type={type}
        value={value}
        onChange={onChangeHandler}
        placeholder={placeholder}
        required={isRequired}
      />
    </fieldset>
  );
}

FormField.propTypes = {
  title: propTypes.string.isRequired,
  type: propTypes.string.isRequired,
  value: propTypes.string.isRequired,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.string,
  isRequired: propTypes.bool
};
