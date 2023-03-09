import React, { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TPost } from './types';
import { Posts } from './Posts';

export type Inputs = {
  content: string;
};

export const PostsContainer: FC<{ userName: string }> = ({ userName }) => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = ({ content }) => {
    setPosts(currentPosts => {
      const newPost: TPost = {
        createdAt: Date.now(),
        content,
        author: userName,
      };

      reset();
      return [...currentPosts, newPost];
    });
  };

  return (
    <Posts
      userName={userName}
      register={register}
      onSubmit={onSubmit}
      errors={errors}
      handleSubmit={handleSubmit}
      posts={posts}
    />
  );
};
