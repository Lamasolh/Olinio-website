import React from 'react';
import classes from './RadioButton.module.css';

const RadioButton = props => {
  return (
    <section className={classes.generalInfo}>
      <h3>{props.title}</h3>
      <div className={classes.inputs}>
        <div className={classes.input__container}>
          <input
            {...props.input}
            onChange={props.onChange}
            // name={props.name}
            defaultValue={props.value}
          />
          <label htmlFor={props.input.id}>{props.label}</label>
        </div>
        <div className={classes.input__container}>
          <input
            {...props.input2}
            onChange={props.onChange}
            // name={props.name}
            defaultValue={props.value}
          />
          <label htmlFor={props.input2.id}>{props.label2}</label>
        </div>
      </div>
    </section>
  );
};

export default RadioButton;
