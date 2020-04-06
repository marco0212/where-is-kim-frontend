import React from 'react';
import { HashRouter } from 'react-router-dom';
import Routes from '../routes';
import GlobalStyle from '../styles/GlobalStyle';

export default function App () {
  return (
    <HashRouter>
      <GlobalStyle />
      <Routes/>
    </HashRouter>
  );
}
