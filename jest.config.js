/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@modules/(.*)$': '<rootDir>/src/modules/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
  },
};
