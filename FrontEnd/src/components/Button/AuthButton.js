import React from 'react';
import { Link } from 'react-router-dom';

import './Button.css';

const AuthButton = props =>
  !props.link ? (
    <button
      className="authButton"
      onClick={props.onClick}
      disabled={props.disabled || props.loading}
      type={props.type}
    >
      {props.loading ? 'Loading...' : props.children}
    </button>
  ) : (
    <Link
      className="customLink"
      to={props.link}
    >
      {props.children}
    </Link>
  );

export default AuthButton;
