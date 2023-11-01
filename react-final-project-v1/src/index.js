import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// TODO: answer here
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";

const AnswerHere = () => (
  <BrowserRouter>
    <ChakraProvider>
      <CSSReset />
      <App />
    </ChakraProvider>
  </BrowserRouter>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AnswerHere />
  </React.StrictMode>
);
