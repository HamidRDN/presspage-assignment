module.exports = {
    root: true,
    extends: ['eslint:recommended', 'airbnb-base', 'plugin:unicorn/recommended', 'plugin:vue/vue3-recommended', '@vue/eslint-config-typescript/recommended', '@vue/eslint-config-prettier'],
    env: {
        browser: true,
        es2022: true,
    },
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'sort-imports': 'off',
        'import/order': 'off',
        'import/no-extraneous-dependencies': 'off',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    props: true,
                    env: true,
                    ImportMetaEnv: true,
                },
            },
        ],
    },
};
