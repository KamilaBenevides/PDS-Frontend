import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes/Routes';
import 'antd/dist/antd.css';

import { client } from './api/apollo'
import { ApolloProvider } from "@apollo/client"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>

    <BrowserRouter >
      <Routes/>
    </BrowserRouter>
  </ApolloProvider>
);


