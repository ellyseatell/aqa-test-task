import { createBdd } from 'playwright-bdd';
import { CreateAccountPage } from '../page-objects/create-account.page';
import { LoginPage } from '../page-objects/login.page';
import { expect } from '@playwright/test';
import { test } from '../../fixtures/testContext';
import { globalData } from '../../fixtures/globaldata';

const { Given, When, Then } = createBdd(test);

let loginPage: LoginPage;
let createaccountpage: CreateAccountPage;

Given('I am on the login page', async ({ page }) => {
  await page.goto('/');
});

When('the user clicks on Create account', async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.gotoCreateAccountFromLogin();
});

When('the user is redirected to the registration page', async ({ page }) => {
  createaccountpage = new CreateAccountPage(page);

  await expect(page).toHaveURL(/.*register/);
  await expect(createaccountpage.usernameInput).toBeVisible();
});

When('the user enters a valid username', async ({ username }) => {
  await createaccountpage.fillUsername(username);
});

When('the user enters a valid email', async ({ email }) => {
  await createaccountpage.fillEmail(email);
});

When('the user enters a valid password', async ({ password }) => {
  await createaccountpage.fillPassword(password);
});

When('the user submits the registration form', async ({}) => {
  await createaccountpage.submit();
});


Then('the account should be created successfully', async ({ email, username, password }) => {
  // store the dynamically generated data
  globalData.createdUser = { email, username, password };
  console.log('Created user stored globally:', globalData.createdUser);
});

Then('the user should be logged in', async ({ page }) => {
  await loginPage.verifyMenuItems([
    'Overview',
    'Upcoming',
    'Projects',
    'Labels',
    'Teams'
  ]);
});

When('the user enters a username that already exists', async () => {
  if (!globalData.createdUser) throw new Error('No user stored globally!');
  await createaccountpage.fillUsername(globalData.createdUser.username);
});

When('the user enters a email that already exists', async () => {
  if (!globalData.createdUser) throw new Error('No user stored globally!');
  await createaccountpage.fillEmail(globalData.createdUser.email);
});

When('the user enters a password', async () => {
  if (!globalData.createdUser) throw new Error('No user stored globally!');
  await createaccountpage.fillPassword(globalData.createdUser.password);
});

Then('an error message {string} should be displayed', async ({}, errormessage) => {
  // Step: Then an error message "A user with this email address already exists." should be displayed
  // From: qa\tests\features\createaccount.feature:26:5
  await expect(createaccountpage.userexistsmessage).toBeVisible();
  await expect(createaccountpage.userexistsmessage).toHaveText(errormessage);
});