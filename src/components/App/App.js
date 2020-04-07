import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "../../routes";
import GlobalStyle from "../../styles/GlobalStyle";

export default function App({ isLogin }) {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes isLogin={isLogin} />
    </BrowserRouter>
  );
}
