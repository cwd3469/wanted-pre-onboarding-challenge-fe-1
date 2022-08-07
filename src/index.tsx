import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "@emotion/react";
import App from "./pages/App";
import GlobalStyle from "./components/GlobalStyle";

// const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
