import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Routes />
    </ApolloProvider>,
    document.getElementById('app'),
);
