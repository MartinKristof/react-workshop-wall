import React, { FC } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { Heading } from '@o2/components/ui/Heading';
import { InputField } from '@o2/components/ui/InputField';
import { Button } from '@o2/components/ui/Button';
import { PostsList } from './PostsList';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { TPostsInputs } from './PostsContainer';
import { TPost } from './types';
import { requiredFieldErrorMessage } from '@o2/constants';
export const Posts: FC<{
  username: string;
  errors: FieldErrors<TPostsInputs>;
  register: UseFormRegister<TPostsInputs>;
  handleSubmit: UseFormHandleSubmit<TPostsInputs>;
  onSubmit: SubmitHandler<TPostsInputs>;
  posts: TPost[];
}> = ({ username, errors, register, handleSubmit, onSubmit, posts }) => (
  <section>
    <Row>
      <Col>
        <Heading>Posts by: {username}</Heading>
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
            errorMessage={requiredFieldErrorMessage}
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
