import React from "react";
import { createRoot } from "react-dom/client";
import App from "~/containers/main/MainView";
import { Provider } from "react-redux";
import { store } from "~/redux/store";

const containers = document.getElementById("app");
const root = createRoot(containers);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
