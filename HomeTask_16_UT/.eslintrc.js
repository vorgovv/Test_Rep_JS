module.exports = {
    env: {
      mocha: true,
      node: true,
    },
    extends: 'eslint:recommended',
    rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
    },
    ignorePatterns: ['node_modules/', 'mochawesome-report/', 'src/', '.DS_Store'],
  };
