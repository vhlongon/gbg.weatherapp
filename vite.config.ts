import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    ViteFonts({
      google: {
        families: [
          { name: "Source Sans Pro", styles: "ital,wght@0,400;1,200;600" },
        ],
      },
    }),
  ],
});
