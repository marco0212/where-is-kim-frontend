import React from 'react';
import FormField from '../FormField';
import Button from '../Button';

export default function Form({ title, onSubmit, fields, buttonText }) {
  return (
    <>
      <h3>{title}</h3>
      <form onSubmit={onSubmit}>
        {
          fields.map((field, index) => (
            <FormField key={`form-filed-${index + 1}`} {...field} />
          ))
        }
        <p>
          <Button text={buttonText} />
        </p>
      </form>
    </>
  );
}