import React, { FC, useState } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Heading } from '@o2/components/ui/Heading';
import { InputField } from '../ui/InputField';
import { Button } from '@o2/components/ui/Button';
import { TPost } from './types';
import PostsList from './PostsList';

type Inputs = {
  content: string;
};

export const Posts: FC<{ userName: string }> = ({ userName }) => {
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
    <section>
      <Row>
        <Col>
          <Heading>Posts by: {userName}</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <InputField
              inputType="textarea"
              label="Content"
              placeholder="Any content"
              isValid={!Boolean(errors.content)}
              errorMessage="Field is mandatory!"
              {...register('content', { required: true })}
            />
            <Button>Send</Button>
          </Form>
        </Col>
        <Row>
          <Col>
            <PostsList items={posts} />
          </Col>
        </Row>
      </Row>
    </section>
  );
};
