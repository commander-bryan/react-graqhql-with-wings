import { ApolloClient } from 'apollo-client';
import { BatchHttpLink } from 'apollo-link-batch-http';
import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
import { ApolloLink, from as compileLink } from 'apollo-link';
import introspectionQueryResultData from './fragmentTypes.json';

const httpLink = new BatchHttpLink({
    uri: 'http://localhost:5050/graphql',
    credentials: 'include',
});

const fragmentMatcher = new IntrospectionFragmentMatcher({
    introspectionQueryResultData,
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache({ fragmentMatcher }),
});

export default client;
