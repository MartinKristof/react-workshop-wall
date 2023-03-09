import React, { FC } from 'react';
import { List } from 'reactstrap';
import { TPost } from './types';
import { PostsItem } from './PostsItem';

export const PostsList: FC<{ items: TPost[] }> = ({ items }) => {
  return (
    <List type="unstyled">
      {items.map(item => (
        <PostsItem key={item.createdAt} {...item} />
      ))}
    </List>
  );
};
