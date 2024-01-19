import { defineConfig } from "vite";
import { tamaguiExtractPlugin, tamaguiPlugin } from "@tamagui/vite-plugin";
import appConfig from "../../../tamagui.config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tamaguiPlugin({
      config: "../../../tamagui.config.ts",
      components: ["tamagui"],
    }),
    // optional, adds the optimizing compiler:
    tamaguiExtractPlugin(appConfig),
  ],
});
