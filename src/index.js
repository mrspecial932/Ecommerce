import React from "react";
import ReactDOM from "react-dom/client";
import "remixicon/fonts/remixicon.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import {Provider} from "react-redux";
import { ToastContainer } from "react-toastify";
import '../node_modules/react-toastify/dist/ReactToastify.css'
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
      <ToastContainer
      position="top-right"
      autoClose={3000}
      closeOnClick
      pauseOnFocusLoss
      pauseOnHover={false}
      theme="dark"
      />
    <App /> 
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
