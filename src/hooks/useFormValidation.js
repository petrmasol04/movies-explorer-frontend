import { useState } from 'react';

export function useFormValidation(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [isValid, setIsValid] = useState(false);
  const [errors, setErrors] = useState({});

  function checkParams(e) {
    const input = e.target;
    const name = input.name;
    const value = input.value;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: input.validationMessage });
    setIsValid(input.closest(".form").checkValidity())
  };

  return { values, setValues, checkParams, isValid, errors };
};