import { LoginContainer } from '@o2/components/login/LoginContainer';
import React from 'react';

const LoginPage = () => <LoginContainer />;

LoginPage.getInitialProps = () => {
  return { props: { isHeaderValid: false } };
};

export default LoginPage;
