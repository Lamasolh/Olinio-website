import React from "react";
import classes from "./InputRegistration.module.css";

const InputRegistration = (props) => {
  return (
    <div className={`${classes.input} ${props.className}`}>
      <label htmlFor={props.htmlFor}>{props.label}*</label>
      <input {...props.input} onChange={props.onChange} name={props.name} defaultValue={props.defaultValue} />
    </div>
  );
};

export default InputRegistration;
