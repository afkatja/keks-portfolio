module.exports = {
  verbose: false,
  testURL: "http://localhost/",
  collectCoverage: false, // soon
  coverageDirectory: "<rootDir>/coverage",
  transform: {
    "^.+\\.js$": "<rootDir>/jestBabelTransform"
  },
  testEnvironment: "node",
  collectCoverageFrom: ["src/client/**/*.js"]
};
