import { loadEnv } from 'vite';
import { defineConfig, mergeConfig, configDefaults } from 'vitest/config';
import eslintPlugin from 'vite-plugin-eslint';
import vue from '@vitejs/plugin-vue';
import viteConfig from './vite.config.mjs';

export default ({ mode }) => {
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };

    return mergeConfig(
        {
            ...viteConfig,
            plugins: [
                vue(),
                eslintPlugin({
                    include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue', 'src/*.js', 'src/*.ts', 'src/*.vue']
                })
            ]
        },
        defineConfig({
            test: {
                setupFiles: ['./tests/setup.ts'],
                globals: true,
                environment: 'jsdom',
                coverage: {
                    all: true,
                    provider: 'v8',
                    reporter: ['text', 'html'],
                    exclude: [
                        ...(configDefaults.coverage.exclude),
                        '**/interface/*',
                        '**/*.config.*',
                        '**/src/main.ts',
                        '**/src/App.vue'
                    ],
                    reportsDirectory: './coverage'
                },
                include: ['**/__tests__/*.spec.(js|ts)']
            }
        })
    );
};
