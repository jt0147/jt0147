import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import alias from "@rollup/plugin-alias";
import path from "path";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./packages"),
        },
    },
    build: {
        lib: {
            entry: path.resolve(__dirname, "packages/index.ts"),
            name: "icon",
            fileName: (format) => `icon.${format}.js`,
        },
        rollupOptions: {
            external: ["react", "react-dom"],
            output: {
                globals: {
                    react: "React",
                    "react-dom": "ReactDOM",
                },
            },
        },
        sourcemap: true,
        emptyOutDir: true,
    },
    plugins: [alias(), react(), dts({
        insertTypesEntry: true,
    })],
});
