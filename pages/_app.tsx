import { ApolloProvider } from '@apollo/client';
import apolloClient from '../apollo/client';

export default function App({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
