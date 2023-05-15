module.exports = {
    env: { browser: true, es2020: true },
    extends: ['eslint:recommended', 'airbnb-base', 'plugin:unicorn/recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: ['react-refresh'],
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    rules: {
        'react-refresh/only-export-components': 'warn',
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'sort-imports': 'off',
        'import/order': 'off',
        'camelcase': 'off',
        'arrow-body-style': 'off',
        'import/no-extraneous-dependencies': 'off',
        'unicorn/prevent-abbreviations': [
            'error',
            {
                allowList: {
                    Props: true,
                    props: true,
                    env: true,
                    ImportMetaEnv: true,
                },
            },
        ],
    },
};
