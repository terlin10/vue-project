/* eslint-env node */
// eslint-disable-next-line
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        'airbnb-base',
        '@vue/eslint-config-typescript'
    ],
    ignorePatterns: [
        'node_modules/',
        'dist/',
        'public/',
        'vite.config.mjs',
        'vitest.config.mjs'
    ],
    parserOptions: {
        ecmaVersion: 'latest'
    },
    settings: {
        'import/resolver': {
            alias: {
                map: [['@', './src'], ['@tests', './tests']],
                extensions: ['.ts']
            }
        },
        'import/core-modules': [
            'vite',
            'vite-plugin-eslint',
            '@vitejs/plugin-vue'
        ]
    },
    rules: {
        semi: 2,
        'func-names': 0,
        indent: [2, 4, { SwitchCase: 1 }],
        'no-unused-vars': 0,
        '@typescript-eslint/no-unused-vars': 1,
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'comma-dangle': [2, 'never'],
        'arrow-body-style': [2, 'as-needed'],
        'global-require': 0,
        'max-len': 0,
        'object-curly-newline': 0,
        'no-continue': 0,
        camelcase: 0, // 與 es6 邏輯擴充 ?. 衝突
        'import/extensions': [
            'error',
            'always',
            {
                js: 'never',
                ts: 'never',
                vue: 'never'
            }
        ],

        // vue plugin
        'vue/component-definition-name-casing': 0,
        'vue/no-v-html': 0,
        'vue/html-indent': [1, 4],
        'vue/max-attributes-per-line': [
            1,
            {
                singleline: 2,
                multiline: {
                    max: 1
                }
            }
        ],
        'vue/multi-word-component-names': 0,
        'vue/html-self-closing': [
            1,
            {
                html: {
                    void: 'always',
                    normal: 'always',
                    component: 'always'
                },
                svg: 'always',
                math: 'always'
            }
        ],
        'vue/comment-directive': 0,
        // 此規則會導致safari瀏覽器跑版
        'vue/singleline-html-element-content-newline': 0,

        // 允許多個變數賦值
        'no-multi-assign': 'off',
        // 取消對全局變數的限制
        'no-restricted-globals': 0,
        // 允許多個空格
        'no-multi-spaces': ['error', { ignoreEOLComments: true }],
        // 取消模組導入的順序要求
        'import/order': 'off',

        // 允許使用 click 事件而不必要求使用對應的鍵盤事件
        'vuejs-accessibility/click-events-have-key-events': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',

        // 以下是針對 vue 的配置

        // 排序attribute
        'vue/attributes-order': ['error', {
            order: [
                // 条件指令
                'CONDITIONALS', // 例如：v-if, v-show
                'DEFINITION', // 例如 v-bind 和 v-model。
                'LIST_RENDERING', // 例如 v-for。
                'RENDER_MODIFIERS', // 例如 v-pre 和 v-cloak
                'GLOBAL', // 例如 id 和 class
                ['UNIQUE', 'SLOT'], // 例如 v-slot，這些屬性彼此之間有特定的排序關係。
                'OTHER_DIRECTIVES', // 其他指令。
                'OTHER_ATTR', // 其他屬性。
                'EVENTS', // 例如 @click。
                'CONTENT' // 內容屬性。
            ],
            alphabetical: false
        }],

        // 傳入props的組建要用dash格式
        'vue/attribute-hyphenation': ['error', 'always', {
            ignore: []
        }],

        // html tag的尾巴角括號要換行
        'vue/html-closing-bracket-newline': ['warn', {
            singleline: 'never',
            multiline: 'always'
        }],
        // vue的div內{{}}中要有空格
        'vue/mustache-interpolation-spacing': ['warn', 'always'],
        // 不能有無謂的空格
        'vue/no-multi-spaces': ['warn', {
            ignoreProperties: false
        }],
        // attribute的等號左右不能有空格（例如<div class = "123"）
        'vue/no-spaces-around-equal-signs-in-attribute': ['warn'],
        // 組建內的props要用小駝峰命名
        'vue/prop-name-casing': ['warn', 'camelCase'],
        // div的v-bind前綴省略
        'vue/v-bind-style': ['warn', 'shorthand'],
        // div的v-on前綴省略
        'vue/v-on-style': ['warn', 'shorthand'],
        // vue的tag order
        'vue/component-tags-order': ['error', {
            order: [['script', 'template'], 'style']
        }]
    }
};
