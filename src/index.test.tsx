import { ApolloProvider } from '@apollo/client';
import '@testing-library/jest-dom/extend-expect';
import { render, waitFor } from '@testing-library/react';
import apolloClient from '../apollo/client';
import { IndexPage } from './index';

describe('index', () => {
  it('view index', async () => {
    const { getByTestId, debug } = render(
      <ApolloProvider client={apolloClient}>
        <IndexPage />
      </ApolloProvider>
    );

    await waitFor(() => expect(getByTestId('loading')).toBeInTheDocument());
    await waitFor(() => expect(getByTestId('details')).toBeInTheDocument());

    debug();

    const details = getByTestId('details');

    expect(details).toHaveTextContent(
      /^You're signed in as John Smith and you're live goto static page.$/
    );

    expect(details).toHaveTextContent(/John Smith/);
  });
});
