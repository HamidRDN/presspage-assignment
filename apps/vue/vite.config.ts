/// <reference types="vitest" />

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

import browserslistToEsbuild from 'browserslist-to-esbuild';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths({
            // Fix issue with vue-tsc
            loose: true,
        }),
        vue(),
    ],
    build: { target: browserslistToEsbuild() },
    envDir: '../../',
    test: {
        globals: true,
        environment: 'jsdom',
        deps: {
            inline: ['vuetify'],
        },
        setupFiles: ['./vitest-setup.ts'],
    },
});
