import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/react-components/bg-changer/",
  plugins: [react()],
});
