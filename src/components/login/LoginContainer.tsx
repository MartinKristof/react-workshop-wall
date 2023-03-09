import React, { useContext } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Login } from './Login';
import { UserContext } from '../../contexts/UserContext';
import { useRouter } from 'next/router';

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
  const { setUsername } = useContext(UserContext);
  const router = useRouter();

  const onSubmit: SubmitHandler<TLoginInputs> = ({ username }) => {
    setUsername(username);

    router.push('/posts');
  };

  return <Login register={register} onSubmit={onSubmit} errors={errors} handleSubmit={handleSubmit} />;
};
