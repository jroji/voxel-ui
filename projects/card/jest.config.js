const baseConfig = require('../../jest.config');

module.exports = {
  ...baseConfig,
  globals: {
    'ts-jest': {
      tsConfig: '<rootDir>/projects/card/tsconfig.spec.json',
    },
  },
};
