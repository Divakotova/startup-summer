module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'react-hooks'],
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        path: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/react-in-jsx-scope': 'warn', // fix problems 'React' must be in scope when using JSX
    'import/extensions': [
      // fix problems Missing file extension "tsx"
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'react/jsx-filename-extension': [
      // fix JSX not allowed in files with extension '.tsx'
      'warn', // 'React' must be in scope when using JSX
      { extensions: ['.tsx'] },
    ],
    'react/destructuring-assignment': 'warn', // fix error - Must use destructuring props assignment
    'class-methods-use-this': 'warn', // Expected 'this' to be used by class method 'renderBlock'
    'jsx-a11y/click-events-have-key-events': 'warn', // Visible, non-interactive elements with click handlers must have at least one keyboard listener
    'jsx-a11y/no-noninteractive-element-interactions': 'warn', // Non-interactive elements should not be assigned mouse or keyboard event listeners
    'react/no-array-index-key': 'warn', // Do not use Array index in keys
    // Some extra rules from mentor
    'no-unused-vars': 'error', 
    'no-use-before-define': 'error', 
    '@typescript-eslint/no-use-before-define': ['error'], 
    semi: 'warn', 
    camelcase: 'error', 
    'import/order': 'error', 
    'import/prefer-default-export': 'error', 
    'array-bracket-spacing': 'error', 
    quotes: ['error', 'single'], 
    'object-curly-spacing': 'warn', 
    '@typescript-eslint/explicit-function-return-type': 'warn', 
    '@typescript-eslint/explicit-module-boundary-types': 'warn', 
    '@typescript-eslint/ban-ts-comment': 'error', 
    '@typescript-eslint/no-var-requires': 'error', 
    'array-callback-return': 'error', 
    'react/jsx-props-no-spreading': 'error', 
    'no-unused-expressions': 'error', 
    'import/no-extraneous-dependencies': 'error', 
    'global-require': 'error', 
    'jsx-a11y/label-has-associated-control': [
      // fix error - A form label must be associated with a control
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          some: ['nesting', 'id'],
        },
      },
    ],
  },
  overrides: [
    // fix 'JSX' is not defined  no-undef
    {
      files: ['**/*.ts', '**/*.tsx'],
      rules: {
        'no-undef': 'off',
        'no-unused-vars': 'warn',
        'import/no-unresolved': 'warn',
      },
    },
  ],
};