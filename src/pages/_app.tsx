import '@o2/styles/globals.css';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import { Container } from 'reactstrap';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Container>
      <Component {...pageProps} />
    </Container>
  );
};

export default App;
