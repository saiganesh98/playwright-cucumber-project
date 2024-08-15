const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './features', // Directory for Cucumber features
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  use: {
    headless: false, // Set to true for headless mode
    viewport: { width: 1280, height: 720 },
  },
  reporter: 'list',
});
