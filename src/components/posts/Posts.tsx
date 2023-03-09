import React, { FC } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { Heading } from '@o2/components/ui/Heading';
import { InputField } from '@o2/components/ui/InputField';
import { Button } from '@o2/components/ui/Button';
import { PostsList } from './PostsList';
import { FieldErrors, SubmitHandler, UseFormHandleSubmit, UseFormRegister } from 'react-hook-form';
import { Inputs } from './PostsContainer';
import { TPost } from './types';
export const Posts: FC<{
  userName: string;
  errors: FieldErrors<Inputs>;
  register: UseFormRegister<Inputs>;
  handleSubmit: UseFormHandleSubmit<Inputs>;
  onSubmit: SubmitHandler<Inputs>;
  posts: TPost[];
}> = ({ userName, errors, register, handleSubmit, onSubmit, posts }) => (
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
