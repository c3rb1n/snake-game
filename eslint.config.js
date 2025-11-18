import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import {defineConfig, globalIgnores} from 'eslint/config';

export default defineConfig([
    globalIgnores(['dist']),
    {
        files: ['**/*.{js,jsx}'],
        plugins: {react},
        extends: [
            js.configs.recommended,
            stylistic.configs.recommended,
            reactHooks.configs['recommended-latest'],
            reactRefresh.configs.vite,
        ],
        languageOptions: {
            ecmaVersion: 2020,
            globals: globals.browser,
            parserOptions: {
                ecmaVersion: 'latest',
                ecmaFeatures: {jsx: true},
                sourceType: 'module',
            },
        },
        rules: {
            'func-names': 'off',
            'eqeqeq': 'error',
            'operator-assignment': 'warn',
            'sort-vars': 'warn',

            'prefer-const': 'error',
            'prefer-destructuring': 'warn',
            'prefer-object-spread': 'warn',
            'prefer-rest-params': 'warn',
            'prefer-exponentiation-operator': 'error',
            'prefer-template': 'error',

            'no-unused-vars': ['error', {varsIgnorePattern: '^[A-Z_]'}],
            'no-plusplus': 'off',
            'no-underscore-dangle': 'off',
            'no-case-declarations': 'off',
            'no-nested-ternary': 'off',
            'no-constant-binary-expression': 'warn',
            'no-constant-condition': 'warn',
            'no-debugger': 'warn',
            'no-dupe-keys': 'warn',
            'no-duplicate-imports': 'error',
            'no-fallthrough': 'warn',
            'no-prototype-builtins': 'warn',
            'no-unassigned-vars': 'error',
            'no-use-before-define': 'error',
            'no-empty-function': 'error',
            'no-extra-boolean-cast': 'warn',
            'no-magic-numbers': 'warn',
            'no-multi-assign': 'error',
            'no-multi-str': 'error',
            'no-negated-condition': 'error',
            'no-new': 'error',
            'no-param-reassign': 'error',
            'no-return-assign': 'error',
            'no-unneeded-ternary': 'error',
            'no-useless-return': 'error',
            'no-var': 'error',
            'no-unused-expressions': ['error', {
                allowShortCircuit: true,
                allowTernary: true,
            }],
        },
    },
    {
        plugins: {'@stylistic': stylistic},
        rules: {
            '@stylistic/jsx-indent-props': ['error', 'first'],
            '@stylistic/arrow-parens': ['error', 'as-needed'],
            '@stylistic/space-before-function-paren': ['error', 'never'],
            '@stylistic/block-spacing': ['error', 'never'],
            '@stylistic/comma-dangle': 'off',
            '@stylistic/brace-style': ['error', '1tbs', {allowSingleLine: true}],
            '@stylistic/dot-location': ['error', 'property'],
            '@stylistic/linebreak-style': 'off',
            '@stylistic/operator-linebreak': ['error', 'after'],
            '@stylistic/semi': ['error', 'always'],
            '@stylistic/semi-style': ['error', 'last'],
            '@stylistic/object-curly-spacing': ['error', 'never'],
            '@stylistic/object-curly-newline': ['error', {
                consistent: true,
            }],
            '@stylistic/no-mixed-operators': ['error', {
                groups: [['&&', '||']],
            }],
            '@stylistic/no-multi-spaces': ['error', {
                ignoreEOLComments: true,
            }],
            '@stylistic/no-trailing-spaces': ['error', {
                ignoreComments: true,
            }],
            '@stylistic/indent': ['error', 4, {
                ignoredNodes: ['ConditionalExpression'],
                SwitchCase: 1,
                MemberExpression: 'off',
            }],
            '@stylistic/max-len': ['error', {
                code: 120,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
                ignoreComments: true,
            }],
        },
    }
]);
