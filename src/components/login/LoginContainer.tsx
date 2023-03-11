import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Login } from './Login';
import { useRouter } from 'next/router';
import { useAuth } from '@o2/hooks/useAuth';

export type TLoginInputs = {
  username: string;
  password: string;
};

export const LoginContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TLoginInputs>();
  const { logIn } = useAuth();
  const router = useRouter();

  const onSubmit: SubmitHandler<TLoginInputs> = ({ username }) => {
    logIn(username);

    router.push('/posts');
  };

  return <Login register={register} onSubmit={onSubmit} errors={errors} handleSubmit={handleSubmit} />;
};
