import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import path from 'path';
import vue from '@vitejs/plugin-vue';

function removeDataTestid(node) {
    if (node.type === 1 /* NodeTypes.ELEMENT */) {
        node.props = node.props.filter((prop) => (prop.type === 6 ? prop.name !== 'data-testid' : true));
    }
}

const clientDomain = 'https://www.demo.com';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue({
            template: {
                // transformAssetUrls,
                compilerOptions: {
                    nodeTransforms: removeDataTestid
                }
            }
        }),
        eslintPlugin({
            include: ['src/**/*.js', 'src/**/*.ts', 'src/**/*.vue', 'src/*.js', 'src/*.ts', 'src/*.vue']
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@tests': path.resolve(__dirname, './tests'),
            $public: path.resolve('./public'),
            $assets: path.resolve('./src/assets')
        }
    },
    server: {
        port: 8888,
        proxy: {
            '/api': {
                target: clientDomain,
                changeOrigin: true,
                headers: {}
            }
        }
    }
});
