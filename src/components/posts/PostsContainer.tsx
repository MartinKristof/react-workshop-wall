import React, { FC, useContext, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { TPost } from './types';
import { Posts } from './Posts';
import { UserContext } from '../../contexts/UserContext';

export type TPostsInputs = {
  content: string;
};

export const PostsContainer: FC = () => {
  const [posts, setPosts] = useState<TPost[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TPostsInputs>();

  const { username } = useContext(UserContext);

  const onSubmit: SubmitHandler<TPostsInputs> = ({ content }) => {
    setPosts(currentPosts => {
      const newPost: TPost = {
        createdAt: Date.now(),
        content,
        author: username,
      };

      reset();
      return [...currentPosts, newPost];
    });
  };

  return (
    <Posts
      username={username}
      register={register}
      onSubmit={onSubmit}
      errors={errors}
      handleSubmit={handleSubmit}
      posts={posts}
    />
  );
};
