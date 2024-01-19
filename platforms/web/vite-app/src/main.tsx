import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// some helpful reset styles for web:
import "@tamagui/core/reset.css";

import { TamaguiProvider } from "tamagui";
import appConfig, { AppConfig } from "../../../../tamagui.config.ts";

// this makes typescript properly type everything based on the config
declare module "tamagui" {
  interface TamaguiCustomConfig extends AppConfig {}
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TamaguiProvider config={appConfig}>
      <App />
    </TamaguiProvider>
  </React.StrictMode>
);
