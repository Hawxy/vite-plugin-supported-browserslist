import { defineConfig } from 'vite';
import path from 'path';
import dts from 'vite-plugin-dts'

export default defineConfig({
    plugins: [dts()],
    build: {
        minify: false,
        lib: {
            entry: [path.resolve(__dirname, 'src/index.ts'), path.resolve(__dirname, 'src/web.ts')],
            formats: ['es'],
            fileName: (_, entryName) => {
                return `${entryName}.js`;
            },
        },
        rollupOptions: {
            external: ['browserslist-useragent-regexp', 'virtual:vite-plugin-supported-browserslist', 'vite'],
        }
    }
});