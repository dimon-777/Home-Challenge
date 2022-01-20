exports.config = {
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://next-realworld.vercel.app',
      show: true,
      browser: 'chromium'
    },
    AssertWrapper: {
      require: "codeceptjs-assert",
    },
  },
  include: {
    I: './steps_file.js',
    secrets: "./secrets.js"
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    stepByStepReport: {
      enabled: true,
      deleteSuccessful: false,
      animateSlides: true,
      fullPageScreenshots: false,
      screenshotsForAllureReport: true,
    },
    allure: {
      enabled: true,
    },
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    },
    
  ],
  tests: './*_test.js',
  name: 'Morning Brew',
  output: "./output/",
}