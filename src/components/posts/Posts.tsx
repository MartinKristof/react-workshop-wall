import React, { FC, useState } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Heading } from '@o2/components/ui/Heading';
import { InputField } from '../ui/InputField';
import { Button } from '@o2/components/ui/Button';

type TPost = {
  createdAt: number;
  author: string; // TODO add User type
  content: string;
};

type Inputs = {
  content: string;
};

export const Posts: FC<{ userName: string }> = ({ userName }) => {
  const [, setPosts] = useState<TPost[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data => {
    setPosts(currentPosts => {
      const newPost: TPost = {
        createdAt: Date.now(),
        content: data.content,
        author: userName,
      };

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
          <Col></Col>
        </Row>
      </Row>
    </section>
  );
};
