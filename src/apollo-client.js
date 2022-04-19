import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://kampus-merdeka-2809.hasura.app/v1/graphql',
    headers: {
        'x-hasura-admin-secret':
          'uEHfP2ag1jM6ayCEAs3ODrumRnwvrPulpL3USazsk6SjYjABfM4cYe4XtNvCwwon',
      },
      cache: new InMemoryCache(),
});

export default client;