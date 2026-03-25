import { Page, Locator, expect } from '@playwright/test';

export class CreateAccountPage {
  readonly page: Page;
  readonly emailaddressInput: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
readonly createaccountbtn: Locator;
readonly userexistsmessage:Locator;


  constructor(page: Page) {
    this.page = page;

    // Using XPath for the login button
    this.createaccountbtn = page.locator(`xpath=//button[@type='button' and span[text()='Create account']]`);
    this.userexistsmessage = page.locator("xpath=//div[@class='message danger']")
    // locate inputs by id (css locator)
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.emailaddressInput = page.locator('#email');
  }

  async goto() {
    await this.page.goto('http://localhost:8080/');
  }

  async createaccount(username: string, password: string, email: string) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    await this.emailaddressInput.fill(email);
    await this.createaccountbtn.click();
  }

   // Individual field methods
  async fillUsername(username: string) {
    await this.usernameInput.fill(username);
  }

  async fillEmail(email: string) {
    await this.emailaddressInput.fill(email);
  }

  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  // Click submit
  async submit() {
    await this.createaccountbtn.click();
  }

 
  async verifyAccountcreated() {
  // assuming a success message appears
  const successMessage = this.page.locator('text=Account created successfully');
  await expect(successMessage).toBeVisible();
}

async Userloggedin() {
  // assuming after login you see a dashboard element
  const dashboard = this.page.locator('#dashboard'); // adjust selector
  await expect(dashboard).toBeVisible();
}

/*
async function getuserid(page: Page, username: string, email: string, password: string) {
  // Listen for the API response
  const [response] = await Promise.all([
    page.waitForResponse(resp => 
      resp.url().includes('/register') && resp.request().method() === 'POST'
    ),  ]);
  // Extract JSON body
  const data = await response.json();
  console.log('Created user ID:', data.id);

  return data.id;
}*/

}