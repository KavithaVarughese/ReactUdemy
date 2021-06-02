import React from "react";
import UseInput from "../hooks/use-input";

const SimpleInput = () => {

  const {
    value: enteredName, 
    hasError: nameInputIsInvalid,
    IsValid: enteredNameIsValid,
    valueChangeHandler: nameInputChangedHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetNameInput
  } = UseInput(value => value.trim() !== '');

  const {
    value: enteredEmail,
    hasError: emailInputIsInvalid,
    IsValid: enteredEmailIsValid,
    valueChangeHandler: emailInputChangedHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetEmailInput
  } = UseInput(value => value.includes('@'));


  let formIsValid = false

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = event => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  }

  const nameInputClasses = !nameInputIsInvalid ? 'form-control' : 'form-control invalid'

  const emailInputClasses = !emailInputIsInvalid ? 'form-control' : 'form-control invalid'

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input 
          type='text' 
          id='name' 
          onChange={nameInputChangedHandler} 
          onBlur={nameInputBlurHandler}
          value={enteredName}/>
      </div>
      {nameInputIsInvalid && <p className="error-text">Name must not be empty</p>}
      <div className={emailInputClasses}>
        <label htmlFor='email'>Your E-Mail</label>
        <input 
          type='email' 
          id='email' 
          onChange={emailInputChangedHandler} 
          onBlur={emailInputBlurHandler}
          value={enteredEmail}/>
      </div>
      {emailInputIsInvalid && <p className="error-text">Please enter a valid email</p>}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
