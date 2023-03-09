import React, { FC, forwardRef, Ref } from 'react';
import { FormFeedback, FormGroup, Input, Label } from 'reactstrap';

export const InputField: FC<{
  name: string;
  label: string;
  isValid: boolean;
  errorMessage?: string;
  inputType?: 'textarea' | 'text' | 'password';
  required?: boolean;
  placeholder?: string;
}> = forwardRef(
  (
    { name, label, isValid, errorMessage = '', inputType = 'text', required = false, placeholder = '', ...restProps },
    ref: Ref<HTMLInputElement>,
  ) => (
    <FormGroup>
      <Label for={name}>{label}</Label>
      <Input
        innerRef={ref}
        id={name}
        invalid={!isValid}
        name={name}
        type={inputType}
        required={required}
        placeholder={placeholder}
        {...restProps}
      />
      {!isValid && errorMessage && <FormFeedback>{errorMessage}</FormFeedback>}
    </FormGroup>
  ),
);

InputField.displayName = 'InputField';
