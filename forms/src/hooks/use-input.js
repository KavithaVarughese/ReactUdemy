import { useState } from "react";

const UseInput = (validateValue) => {
    const [enteredValue, setEnterdValue] = useState('');
    const [isTouched, setIsTouched] = useState(false)

    const IsValid = validateValue(enteredValue);
    const hasError = !IsValid && isTouched;

    const valueChangeHandler = event => {
        setEnterdValue(event.target.value);
    };

    const inputBlurHandler = event => {
        setIsTouched(true);
    }

    const reset = () => {
        setEnterdValue('');
        setIsTouched(false)
    }
    

    return {
        value: enteredValue,
        hasError,
        IsValid,
        valueChangeHandler,
        inputBlurHandler,
        reset,
    }
};

export default UseInput;