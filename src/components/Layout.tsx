import React, { FC, ReactElement } from 'react';
import { Navbar, NavbarBrand, NavbarText, Container } from 'reactstrap';
import { Button } from '@o2/components/ui/Button';
import { useRouter } from 'next/router';
import { useAuth } from '@o2/hooks/useAuth';
import { useUserContext } from '@o2/hooks/useUserContext';

export const Layout: FC<{ children: ReactElement; isHeaderValid: boolean }> = ({ children, isHeaderValid = true }) => {
  const { logOut } = useAuth();
  const { username } = useUserContext();

  const router = useRouter();

  const handleLogout = () => {
    logOut();

    router.push('/login');
  };

  return isHeaderValid ? (
    <>
      <Navbar color="dark" dark>
        <NavbarBrand href="/">React</NavbarBrand>
        {username && (
          <NavbarText>
            <Button onClick={handleLogout}>Logout</Button>
          </NavbarText>
        )}
      </Navbar>
      <Container className="my-5">{children}</Container>
    </>
  ) : (
    <Container className="my-5">{children}</Container>
  );
};
