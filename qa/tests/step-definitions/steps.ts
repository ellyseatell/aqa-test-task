import { createBdd } from 'playwright-bdd';
import { test } from '../../fixtures/testContext'; // optional if you need fixture
import { LoginPage } from '../page-objects/login.page';
import { expect } from '@playwright/test';
import { globalData } from '../../fixtures/globaldata';

const { Given, When, Then } = createBdd(test);

let loginPage: LoginPage;


When('the user enters valid username', async ({page}) => {
    loginPage = new LoginPage(page);

  if (!globalData.createdUser) throw new Error('No global user available!');
  await loginPage.fillUsername(globalData.createdUser.username);
});

When('the user enters valid password', async () => {
  if (!globalData.createdUser) throw new Error('No global user available!');
  await loginPage.fillPassword(globalData.createdUser.password);
});

When('the user submits the login form', async () => {
  await loginPage.submitlogin();
});

Then('the user should be logged in successfully', async ({ page }) => {
  // Example assertion: check menu items
  await loginPage.verifyMenuItems(['Overview', 'Upcoming', 'Projects', 'Labels', 'Teams']);

  // Optional: print logged in user for verification
  console.log('Logged in as:', globalData.createdUser);
});


Then('the error message {string} should be displayed', async ({}, expectedText) => {
  // Step: Then the error message "Wrong email or password" should be displayed
  // From: qa\tests\features\Login.feature:19:5
  await loginPage.verifyErrorMessage(expectedText);
});
When('choose to stay logged in', async ({}) => {
  // Check current status
  const checked = await loginPage.isStayLoggedInChecked();
  console.log('Checkbox is currently checked?', checked);

  // Ensure it's checked
  if (!checked) {
    await loginPage.setStayLoggedIn(true);
    console.log('Checkbox was not checked, now it is checked');
  } else {
    console.log('Checkbox already checked, leaving it as is');
  }
});


Then('Session expiry should be long', async ({}) => {
  


});

When('the user enters invalid username', async ({page}) => {
  // Step: When the user enters invalid username
  // From: qa\tests\features\Login.feature:25:4
    loginPage = new LoginPage(page);

  await loginPage.fillUsername('elyseblabla@lig.com');
});

When('the user enters invalid password', async ({page}) => {
  // Step: And the user enters invalid password
  // From: qa\tests\features\Login.feature:26:5
    loginPage = new LoginPage(page);

  await loginPage.fillPassword('kukuku');
});

When('the user enters sql injection username', async ({page}) => {
  // Step: When the user enters invalid username
  // From: qa\tests\features\Login.feature:25:4
    loginPage = new LoginPage(page);

  await loginPage.fillUsername("' OR '1'='1");
});

When('the user enters sql injection password', async ({page}) => {
  // Step: And the user enters invalid password
  // From: qa\tests\features\Login.feature:26:5
    loginPage = new LoginPage(page);

  await loginPage.fillPassword("' OR '1'='1");
});