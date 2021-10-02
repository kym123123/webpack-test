/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  // testEnvironment: 'jest-environment-jsdom',
  testMatch: ['<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}'],
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '@components/(.*)$': '<rootDir>/src/components/$1',
    '@utils/(.*)$': '<rootDir>/src/utils/$1',
    '@modules/(.*)$': '<rootDir>/src/modules/$1',
    '\\.(css|less|scss|sss|styl)$': '<rootDir>/node_modules/identity-obj-proxy',
  },
};
