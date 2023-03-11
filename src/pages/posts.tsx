import { Auth } from '@o2/components/Auth';
import { PostsContainer } from '@o2/components/posts/PostsContainer';
import React from 'react';

const PostsPage = () => (
  <Auth>
    <PostsContainer />
  </Auth>
);

export default PostsPage;
