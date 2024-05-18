module.exports = {
    // 引用官方的 stylelint-config-standard 與第三方的 stylelint-config-sass-guidelines 設定檔
    extends: [
        'stylelint-config-standard', // 官方的 stylelint-config-standard
        'stylelint-config-sass-guidelines', // 第三方的 stylelint-config-sass-guidelines
        'stylelint-config-css-modules'
    ],
    // 引用第三方的 stylelint-order 插件
    plugins: ['stylelint-order'],

    // 配置 overrides 屬性，用來區分不同類型的檔案
    overrides: [
        {
            // 針對 scss、css、html、vue 檔案使用 postcss-scss 語法
            files: ['**/*.(scss|css|html|vue)'],
            customSyntax: 'postcss-scss',
        },
        {
            // 針對 html、vue 檔案使用 postcss-html 語法
            files: ['**/*.(html|vue)'],
            customSyntax: 'postcss-html',
        },
    ],

    // 配置各種檢查規則
    rules: {
        // 是否允許用red、pink這種color命名
        // 'color-named': 'always-where-possible',
        // 拒絕重複宣告屬性
        'declaration-block-no-duplicate-properties': true,
        // 拒絕使用縮寫屬性覆蓋單一屬性
        'declaration-block-no-shorthand-property-overrides': true,
        // 要求在宣告區塊結束加上分號
        'declaration-block-trailing-semicolon': 'always',
        // 指定縮排為 4 個空格
        indentation: 4,
        // 強制使用雙引號
        'string-quotes': 'double',
        // 強制使用大寫十六進位顏色碼
        'color-hex-case': 'upper',
        'selector-pseudo-class-no-unknown': [
            true,
            {
                ignorePseudoClasses: ['global', 'deep']
            }
        ],
        'at-rule-no-unknown': [,
            true,
            {
                ignoreAtRules: [
                    'circle',
                    'rightTopTriangle',
                    'alignCenter',
                    'overFlowClamp',
                    'boxShdowBorder',
                    'iconBackground',
                    'iconMask',
                    'bubble'
                ]
            }
        ],
        'function-no-unknown': [
            true,
            {
                ignoreFunctions: ['v-bind']
            }
        ],

        // 排序相關的設定
        // 關閉 alphabetical-order，因為 properties-order 已經包含了排序
        'order/properties-alphabetical-order': null,
        // 指定屬性的排序方式
        'order/properties-order': [
            'position',
            'top',
            'right',
            'bottom',
            'left',
            'z-index',
            'display',
            'float',
            'flex',
            'grid',
            'grid-template',
            'grid-template-areas',
            'grid-gap',
            'grid-column-gap',
            'grid-row-gap',
            'grid-auto-rows',
            'grid-auto-columns',
            'grid-auto-flow',
            'grid-template-rows',
            'grid-template-columns',
            'width',
            'min-width',
            'max-width',
            'height',
            'min-height',
            'max-height',
            'padding',
            'padding-top',
            'padding-right',
            'padding-bottom',
            'padding-left',
            'margin',
            'margin-top',
            'margin-right',
            'margin-bottom',
            'margin-left',
            'background',
            'background-color',
            'background-image',
            'background-position',
            'background-size',
            'background-repeat',
            'background-clip',
            'background-origin',
            'background-attachment',
            'border',
            'border-top',
            'border-right',
            'border-bottom',
            'border-left',
            'border-width',
            'border-style',
            'border-color',
            'border-radius',
            'box-shadow',
            'color',
            'font',
            'font-size',
            'font-weight',
            'line-height',
            'letter-spacing',
            'text-align',
            'text-decoration',
            'text-transform',
            'white-space',
            'word-spacing',
            'animation',
            'transition',
            'transform',
            'perspective',
            'opacity',
            'mix-blend-mode',
            'cursor',
            'outline',
            'overflow',
            'user-select',
            'pointer-events',
            'resize',
            'table-layout',
            'empty-cells',
            'caption-side',
            'speak',
            'vertical-align',
            'visibility',
            'will-change',
            'fill',
            'stroke',
            'backface-visibility',
            'contain',
            'isolation',
            'perspective-origin',
            'appearance',
            'mask',
            'mask-image',
            'mask-position',
            'mask-repeat',
            'mask-size',
            'mask-clip',
            'mask-origin',
            'mask-composite',
            'mixins',
        ],
    },
};
