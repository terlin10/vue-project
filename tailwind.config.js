/* eslint-disable no-param-reassign */
/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts}'
    ],
    theme: {
        colors: {
            '#FFF': '#FFF',
            '#000': '#000',
            unset: 'unset',
            transparent: 'transparent'
        },
        extend: {
            borderRadius: {
                inherit: 'inherit'
            },
            spacing: {
                inherit: 'inherit'
            }
        }
    },
    corePlugins: {
        textOpacity: false,
        backgroundOpacity: false,
        borderOpacity: false,
        divideOpacity: false,
        placeholderOpacity: false,
        ringOpacity: false
    },
    plugins: [
        plugin(({ matchUtilities, theme, addVariant }) => {
            matchUtilities(
                {
                    'text-shadow': (value) => ({
                        textShadow: value
                    })
                },
                { values: theme('textShadow') }
            );
            addVariant('em', ({ container }) => {
                container.walkRules((rule) => {
                    rule.selector = `.em\\:${rule.selector.slice(1)}`;
                    rule.walkDecls((decl) => {
                        decl.value = decl.value.replace('rem', 'em');
                    });
                });
            });
        })
    ]
};
