import React, { FC } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { InputField } from '@o2/components/ui/InputField';
import { Button } from '@o2/components/ui/Button';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { TLoginInputs } from './LoginContainer';
import { requiredFieldErrorMessage } from '@o2/constants';

export const Login: FC<{
  errors: FieldErrors<TLoginInputs>;
  register: UseFormRegister<TLoginInputs>;
  handleSubmit: UseFormHandleSubmit<TLoginInputs>;
  onSubmit: SubmitHandler<TLoginInputs>;
}> = ({ errors, register, handleSubmit, onSubmit }) => {
  return (
    <section>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              label="Username"
              {...register('username', { required: true })}
              isValid={!Boolean(errors.username)}
              errorMessage={requiredFieldErrorMessage}
            />
            <InputField
              inputType="password"
              label="Password"
              {...register('password', { required: true })}
              isValid={!Boolean(errors.password)}
              errorMessage={requiredFieldErrorMessage}
            />
            <Button>Log in</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
