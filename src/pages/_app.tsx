import '@o2/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';
import { UserContextProvider } from '@o2/contexts/UserContext';
import { useState } from 'react';

const App = ({ Component, pageProps }: AppProps) => {
  const [username, setUsername] = useState('');

  return (
    <UserContextProvider value={{ username, setUsername }}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </UserContextProvider>
  );
};

export default App;
