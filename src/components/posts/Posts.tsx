import React, { FC } from 'react';
import { Col, Form, Row } from 'reactstrap';
import { Heading } from '@o2/components/ui/Heading';
import { InputField } from '../ui/InputField';
import { Button } from '@o2/components/ui/Button';

export const Posts: FC<{ userName: string }> = ({ userName }) => {
  return (
    <section>
      <Row>
        <Col>
          <Heading>Posts by: {userName}</Heading>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form>
            <InputField name="content" inputType="textarea" label="Content" />
            <Button>Send</Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
};
