import React from "react";
import classes from "./ButtonRegistration.module.css";

const ButtonRegistration = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};

export default ButtonRegistration;
