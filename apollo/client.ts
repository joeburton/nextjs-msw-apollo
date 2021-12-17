import { ApolloClient, InMemoryCache } from '@apollo/client';

const cache = new InMemoryCache({
  addTypename: false,
  typePolicies: {
    Query: {
      fields: {
        viewer: {
          merge(_existing, incoming) {
            // console.log(_existing, incoming)
            return incoming;
          },
        },
      },
    },
  },
});

// const HOST =
//   process.env.NODE_ENV === 'development'
//     ? process.env.NEXT_PUBLIC_APP_DEV
//     : process.env.NEXT_PUBLIC_APP_PROD;

// console.log(HOST);

const apolloClient = new ApolloClient({
  uri: `http://localhost:3000/api/graphql`,
  cache: cache,
});

export default apolloClient;
