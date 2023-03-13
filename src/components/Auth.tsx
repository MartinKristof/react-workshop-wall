import { FC, ReactElement, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUserContext } from '@o2/hooks/useUserContext';
import { useInitialRender } from '@o2/hooks/useInitialRender';

export const Auth: FC<{ children: ReactElement }> = ({ children }) => {
  const { initialRenderComplete } = useInitialRender();
  const router = useRouter();
  const { username } = useUserContext();

  useEffect(() => {
    if (initialRenderComplete && !username) {
      router.push('/login');
    }
  }, [router, username, initialRenderComplete]);

  return initialRenderComplete && username ? children : null;
};
