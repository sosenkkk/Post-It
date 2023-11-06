import React from "react";
import { Link } from "react-router-dom";

import "./Button.css";

const EditButton = (props) => (
  <button
    className={[
      "button",
      `button--${props.design}`,
      `button--${props.mode}`,
      `button--edit`,
    ].join(" ")}
    onClick={props.onClick}
    disabled={props.disabled || props.loading}
    type={props.type}
  >
    {props.loading ? "Loading..." : props.children}
  </button>
);

export default EditButton;
