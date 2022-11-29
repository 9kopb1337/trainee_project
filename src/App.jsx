import React from "react";
import { Provider } from "react-redux";
import { AppRoutes } from "./routes/AppRoutes";
import store from "./store";

export function App() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    </React.StrictMode>
  );
}
