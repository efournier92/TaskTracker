import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../components/App';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
} from '@apollo/client';

const csrfToken =
  document.querySelector('meta[name=csrf-token]')!.getAttribute('content') ||
  '';

const client = new ApolloClient({
  link: new HttpLink({
    credentials: 'same-origin',
    headers: {
      'X-CSRF-Token': csrfToken,
    },
  }),
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('react-root')!).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
);
