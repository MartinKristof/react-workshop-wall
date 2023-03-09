import React, { FC } from 'react';
import { FormGroup, Input, Label } from 'reactstrap';

export const InputField: FC<{
  name: string;
  label: string;
  inputType?: 'textarea' | 'text' | 'password';
}> = ({ name, inputType = 'text', label }) => (
  <FormGroup>
    <Label for={name}>{label}</Label>
    <Input id={name} name={name} type={inputType} />
  </FormGroup>
);
