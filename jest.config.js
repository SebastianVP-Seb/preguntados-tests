
module.exports = {

  verbose: true,
  "transform": {
    "\\.[jt]sx?$": "babel-jest"
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', './enzyme-config.js'],
  testEnvironment: 'jsdom',
  coverageThreshold : {
    global: {
      functions: 90,
      branch: 90,
      lines: 90,
      statements: 90
    }
  }

}
