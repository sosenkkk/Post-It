import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const DeleteButton = (props) => (
  <button
    className={[
      "button",
      `button--${props.design}`,
      `button--${props.mode}`,
      `button--delete`,
    ].join(" ")}
    onClick={props.onClick}
    disabled={props.disabled || props.loading}
    type={props.type}
  >
    {props.loading ? "Loading..." : props.children}
  </button>
);

export default DeleteButton;
