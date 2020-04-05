import React from 'react';
import propTypes from 'prop-types';

export default function Button({ text = 'Submit', onClick }) {
  return <button onClick={onClick}>{text}</button>;
}

Button.propTypes = {
  text: propTypes.string,
  onClick: propTypes.func
};
