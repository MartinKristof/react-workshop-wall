import '@o2/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { UserContextProvider } from '@o2/contexts/UserContext';
import { useEffect, useMemo, useState } from 'react';
import { Layout } from '@o2/components/Layout';
import { useAuth } from '@o2/hooks/useAuth';

const App = ({ Component, pageProps }: AppProps) => {
  const [username, setUsername] = useState('');
  const { getUserFromStorage } = useAuth();
  const user = getUserFromStorage();

  useEffect(() => {
    if (user && user !== username) {
      setUsername(user);
    }
  }, [user, username]);

  const contextValue = useMemo(
    () => ({
      username,
      setUsername,
    }),
    [username],
  );

  return (
    <UserContextProvider value={contextValue}>
      <Layout isHeaderValid={pageProps?.props?.isHeaderValid}>
        <Component {...pageProps} />
      </Layout>
    </UserContextProvider>
  );
};

export default App;
