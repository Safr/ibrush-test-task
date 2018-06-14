module.exports = {
  verbose: true,
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: [
    'text',
    'html',
  ],
  "globals": {
    // "window": {},
    "ts-jest": {
      "tsConfigFile": "./tsconfig.json"
    }
  },
  // resetMocks: true,
  setupFiles: [
    '<rootDir>/test-setup.js',
    'jest-localstorage-mock',
    // '<rootDir>/jest.stubs.js',
  ],
  setupTestFrameworkScriptFile: '<rootDir>/test-setup.js',
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    "json",
    "node",
  ],
  moduleNameMapper: {
    '\.(css|jpg|png)$': '<rootDir>/empty-module.js',
  },
  testEnvironment: 'node',
  testMatch: [
  //   // '**/__tests__/**/*.(js|jsx)',
    '**/__tests__/**/*.(ts|tsx|js)',
  ],
  transform: {
    // '^.+\\.jsx?$': 'babel-jest',
    // '^.+\\.(ts|tsx)$': '<rootDir>/test-preprocessor.js',
    '^.+\\.(ts|tsx)$': './node_modules/ts-jest/preprocessor.js',
  },
  // testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  // transformIgnorePatterns: ["[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$"],
  // testRegex: '(/**/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
  snapshotSerializers: [
    'enzyme-to-json/serializer',
  ],
};
