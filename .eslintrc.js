module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier'
  ],
  overrides: [
  ],
  parserOptions: {
    project: './tsconfig.json'
  },
  plugins: [
    'react'
  ],
  rules: {
  },
  ignorePatterns: [
    'node_modules/'
  ]
}
