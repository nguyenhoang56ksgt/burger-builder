import React from "react";
import classes from "./Input.module.css";

const Input = props => {
  let inputElement = null;
  const inputClasses = [classes.InputElement];
 
  if (props.invalid  && props.shouldValidate && props.touched){
      inputClasses.push(classes.Invalid)
  }

  let validationError = null;
  if (props.invalid && props.touched) {
    validationError = <p className={classes.ValidationError}>{props.errorMessage}</p>;
  }
    switch (props.elementType) {
      case "input":
        inputElement = (
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
      case "textarea":
        inputElement = (
          <textarea
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
      case "select":
        inputElement = (
          <select
            onChange={props.changed}
            className={inputClasses.join(" ")}
            value={props.value}
          >
            {props.elementConfig.options.map(option => (
              <option key={option.displayValue} value={option.value}>
                {option.displayValue}
              </option>
            ))}
          </select>
        );
        break;
      default:
        inputElement = (
          <input
            className={inputClasses.join(" ")}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
          />
        );
        break;
    }
  return (
    <div className={classes.Input}>
      <label className={classes.Label}>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default Input;
