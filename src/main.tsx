import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./i18n/i18n";
import "./scss/main.scss";

import Pages from "./pages/Pages.tsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
