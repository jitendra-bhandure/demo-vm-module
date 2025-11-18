import type { Config} from 'jest';

const config: Config = {
  displayName: 'demo-app',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.ts'],
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/demo-app',
  transformIgnorePatterns: ['node_modules/(?!(until-async))'],
  cache: false,
};

export default config;