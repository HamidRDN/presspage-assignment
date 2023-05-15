/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import browserslistToEsbuild from 'browserslist-to-esbuild';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        tsconfigPaths({
            // Fix issue with vue-tsc
            loose: true,
        }),
        react(),
    ],
    build: { target: browserslistToEsbuild() },
    envDir: '../../',
    test: {
        environment: 'jsdom',
        setupFiles: ['./vitest-setup.ts'],
        globals: true,
    },
});
