import React, { FC } from 'react';
import { Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { TPost } from './types';

export const PostsItem: FC<{ createdAt: TPost['createdAt']; content: TPost['content']; author: TPost['author'] }> = ({
  content,
  author,
  createdAt,
}) => (
  <li>
    <Card>
      <CardBody>
        <CardTitle>{author}</CardTitle>
        <CardSubtitle>{new Intl.DateTimeFormat('cs-CZ').format(createdAt)}</CardSubtitle>
        <CardText>{content}</CardText>
      </CardBody>
    </Card>
  </li>
);
