import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://savvy-marketplace.myshopify.com/api/2023-01/graphql.json",
  cache: new InMemoryCache(),
  headers:{
    'X-Shopify-Storefront-Access-Token': 'c6c55d3f59275e9827ccd189b8a5d0f5',
  }
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
const colors = {
  Savvygreen:{
    0:'#53775E'
  }
}

const theme = extendTheme({colors})

root.render(
  <StrictMode>
    <ApolloProvider client={client}>
    <ColorModeScript />
    <ChakraProvider theme={theme}>

      <App /> 
    </ChakraProvider>

    </ApolloProvider>
  </StrictMode>
);
