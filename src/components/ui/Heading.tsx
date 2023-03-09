import React, { ElementType, FC, ReactNode } from 'react';

export const Heading: FC<{ children: ReactNode; tag?: ElementType }> = ({ tag: Tag = 'h1', children }) => (
  <Tag>{children}</Tag>
);
