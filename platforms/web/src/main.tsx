import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// some helpful reset styles for web:
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";
import appConfig from "../tamagui.config.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TamaguiProvider config={appConfig} defaultTheme="light">
      <App />
    </TamaguiProvider>
  </React.StrictMode>
);
