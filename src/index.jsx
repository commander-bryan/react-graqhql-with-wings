import { ApolloProvider } from 'react-apollo';
import { Provider } from 'react-redux';
import client from './apolloClient';
import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import store from './store/store';

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <Routes />
        </Provider>
    </ApolloProvider>,
    document.getElementById('app'),
);
