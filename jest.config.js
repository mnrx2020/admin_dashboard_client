module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(css|jpg|jpeg|png)$': '<rootDir>/__mocks__/fileMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/src/__tests__/setupTests.ts', '<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    '/node_modules/(?!d3-interpolate|@nivo|d3-scale|d3-shape|d3-array|d3-color|d3-format|d3-time-format)',
  ],
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
};
