import {useState} from 'react';

export function useFormValidation() {
  
  const [values, setValues] = useState({});
  const [isValid, setIsValid] = useState(false)

  function checkParams(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues({...values, [name]: value});
    setIsValid(e.target.closest(".form").checkValidity())
  };

  return {values, setValues, checkParams, isValid};
};