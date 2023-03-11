import React, { FC, ReactNode } from 'react';
import { Button as ReactStrapButton } from 'reactstrap';

export const Button: FC<{
  children: ReactNode;
  buttonType?: 'submit' | 'reset' | 'button';
  color?: 'primary' | 'secondary';
  onClick?: () => void;
}> = ({ children, buttonType = 'submit', color = 'primary', onClick }) => (
  <ReactStrapButton type={buttonType} color={color} onClick={onClick}>
    {children}
  </ReactStrapButton>
);
