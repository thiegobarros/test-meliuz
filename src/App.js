import React from 'react';
import {
  BrowserRouter
} from "react-router-dom";
import Routes from './routes'
import { createStore } from "@reduxjs/toolkit";
import allReducers from './reducers';
import { Provider } from "react-redux";

const store = createStore(allReducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
