import React, { FC, ReactNode } from 'react';
import { Button as ReactStrapButton } from 'reactstrap';

export const Button: FC<{
  children: ReactNode;
  buttonType?: 'submit' | 'reset' | 'button';
  color?: 'primary' | 'secondary';
}> = ({ children, buttonType = 'submit', color = 'primary' }) => (
  <ReactStrapButton type={buttonType} color={color}>
    {children}
  </ReactStrapButton>
);
