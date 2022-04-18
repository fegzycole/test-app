module.exports = {
    parserOptions: {
        ecmaVersion: 10,
        sourceType: 'script',
    },
    parser: '@typescript-eslint/parser',
    extends: [
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    env: {
        node: true,
        es6: true,
        jest: true,
    },
};
