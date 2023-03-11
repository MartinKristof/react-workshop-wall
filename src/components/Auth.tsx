import { FC, ReactElement, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useUserContext } from '@o2/hooks/useUserContext';

export const Auth: FC<{ children: ReactElement }> = ({ children }) => {
  const [initialRenderComplete, setInitialRenderComplete] = useState(false);
  const router = useRouter();
  const { username } = useUserContext();

  useEffect(() => {
    setInitialRenderComplete(true);
  }, []);

  useEffect(() => {
    if (initialRenderComplete && !username) {
      router.push('/login');
    }
  }, [router, username, initialRenderComplete]);

  return initialRenderComplete && username ? children : null;
};
