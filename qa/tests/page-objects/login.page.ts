import { Page, Locator, expect } from '@playwright/test';
import { config } from 'dotenv';


// Default to development if NODE_ENV is not set
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;
config({ path: envFile });
console.log('Loaded ENV file:', envFile);


export class LoginPage {
  readonly page: Page;
  readonly loginButton: Locator;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly errorMessage: Locator;
  readonly menu: Locator;
  readonly stayloggedincheckbox: Locator;
  readonly teamsmenu: Locator;

  constructor(page: Page) {
    this.page = page;

    this.loginButton = page.locator(`xpath=//button[@type='button' and span[text()='Login']]`);
    this.teamsmenu = page.locator("xpath=//a[@href='/teams']")
    this.stayloggedincheckbox = page.locator(`xpath=//input[@type='checkbox']`);
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.errorMessage = page.locator("//div[@class='message danger']");
    // Menu container
    this.menu = page.locator("//menu[@class='menu-list other-menu-items']");
  }

  //go to , browse URL
async gotoVikunja() {
  const url = process.env.BASE_URL;
  if (!url) throw new Error('BASE_URL is not defined in .env');
  await this.page.goto(url);
}

  // Individual field methods
  async fillUsername(username: string) {

await this.usernameInput.fill(username)
  }


  async fillPassword(password: string) {
    await this.passwordInput.fill(password);
  }
//Fill in credentials
 async Fillincredentials(usernameOrEmail: string, password: string) {
  await this.usernameInput.fill(usernameOrEmail);
  await this.passwordInput.fill(password);
}
//submit login and capture the long_token from the api payload
async submitlogin() {
  let loginPayload: any;

  const [request] = await Promise.all([
    this.page.waitForRequest(req =>
      req.url().includes('/api/v1/login') && req.method() === 'POST'
    ),
    this.loginButton.click() // no `await` here
  ]);

  try {
    loginPayload = JSON.parse(request.postData() || '{}');
  } catch (e) {
    throw new Error('Failed to parse login request payload as JSON');
  }
console.log ("long_token value is ",loginPayload.long_token)
  return loginPayload; // return it so you can assert later
}


  async login(usernameOrEmail: string, password: string) {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.usernameInput.fill(usernameOrEmail);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }

  async gotoCreateAccountFromLogin() {  
  const createBtn = this.page.locator("a[href='/register']");
  createBtn.click()
  
}

async verifyErrorMessage(expectedText: string) {
    await expect(this.errorMessage).toHaveText(expectedText);
  }


async verifyMenuItems(expectedItems: string[]) {
  
 const menu = this.page.locator(".menu-list.other-menu-items");

  await expect(menu).toBeVisible();

  const menuLinks = menu.locator("li > a");

  const actualItems = await menuLinks.allTextContents();
  const trimmedItems = actualItems.map(item => item.trim());

  console.log("Actual menu items:", trimmedItems);

  expect(trimmedItems).toEqual(expectedItems);
}

async goToMenu(menuName: string) {
    // Locate the menu container
    const menu = this.page.locator('.menu-list.other-menu-items');
    await expect(menu).toBeVisible({ timeout: 5000 });

    // Find the <a> element inside the menu that matches the menu name
    const menuItem = menu.locator('li > a', { hasText: menuName });
    await expect(menuItem).toBeVisible({ timeout: 5000 });

    // Click the menu item
    await menuItem.click();

    console.log(`Navigated to menu: "${menuName}"`);
  }


  // Toggle the checkbox based on desired state
  async setStayLoggedIn(shouldBeChecked: boolean) {
    const isChecked = await this.stayloggedincheckbox.isChecked();

    if (shouldBeChecked && !isChecked) {
      await this.stayloggedincheckbox.check();
    } else if (!shouldBeChecked && isChecked) {
      await this.stayloggedincheckbox.uncheck();
    }
    // else: already in desired state, do nothing
  }

   async isStayLoggedInChecked(): Promise<boolean> {
  //  this.stayloggedincheckbox = page.locator(`xpath=//input[@type='checkbox']`);
    if (await this.stayloggedincheckbox.count() === 0) {
      throw new Error('Stay Logged In checkbox not found on the page');
    }

    // Returns true if checked, false if unchecked
    return await this.stayloggedincheckbox.isChecked();
  }

   /* async validateLongToken(expectedValue: boolean) {
    const request = await this.page.waitForRequest(req =>
      req.url().includes('/api/v1/login') && req.method() === 'POST'
    );

    const postData = request.postData();
    let payload: any = {};

    if (postData) {
      try {
        payload = JSON.parse(postData);
      } catch (e) {
        throw new Error('Failed to parse login payload as JSON');
      }
    }

    console.log('Intercepted login payload:', payload);
    expect(payload.long_token).toBe(expectedValue);
  }*/
  
}