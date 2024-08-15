const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');
const { timeout } = require('../../playwright.config');



Given('I am on the e-commerce website', async () => {
  await global.page.goto('https://google.com'); // Replace with your URL
});

When('I search for {string}', async (product) => {
    console.log("product is "+product);
  await global.page.fill('textarea[name="q"]', product); // Replace with your search field
  await global.page.locator('input[value="Google Search"]').nth(1).click();
//   await global.page.waitForTimeout(3000);
  await global.page.waitForLoadState("networkidle",{timeout: 10000}); // Replace with your search button
});

Then('I should see results for {string}', async (product) => {
  const results = await global.page.locator(`text=${product}`).count();
  expect(await results).toBeGreaterThan(0);
});
