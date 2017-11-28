import PropTypes from 'prop-types';
import React from 'react';

import './Button.scss';

const Button = ({ type = '', className, text, children, onClick, ...props }) => (
  <button type={type} className={`button ${className}`} onClick={onClick} {...props}>{text}{children}</button>
);

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
