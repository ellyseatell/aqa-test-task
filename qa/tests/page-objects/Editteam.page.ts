import { Page, Locator, expect } from '@playwright/test';

export interface EditTeamOptions {
  newName?: string;
  newDescription?: string;
  addMembers?: string[];
  removeMembers?: string[];
}

export class EditteamPage {
readonly page: Page;
readonly saveteambtn: Locator; // submits the form
readonly teamnameinput1: Locator;


  constructor(page: Page) {
    this.page = page;
    this.saveteambtn = page.locator(`xpath=//button[@type='submit']`);
    this.teamnameinput1 = page.locator('#teamtext');


  }

  
//Edit team name 
 async editTeamFlex(teamname: string, options: EditTeamOptions) {
    console.log(`Editing team: "${teamname}" with options:`, options);

    // --- Update team name if provided ---
    if (options.newName) {
      const nameInput = this.page.locator('#teamtext');
      await expect(nameInput).toBeVisible({ timeout: 5000 });
      await nameInput.click(); // focus
      await nameInput.fill(options.newName);
      console.log(`Team name updated to: "${options.newName}"`);
    }

    // --- Update description if provided ---
    if (options.newDescription) {
      const descInput = this.page.locator('div[role="textbox"]');
      await expect(descInput).toBeVisible({ timeout: 5000 });
      await descInput.click(); // focus
      await descInput.fill(options.newDescription);
      console.log(`Team description updated to: "${options.newDescription}"`);
    }
    // Save changes
    await expect(this.saveteambtn).toBeVisible();
    await this.saveteambtn.click();

    console.log(`✅ Team "${teamname}" changes saved`);
  }


  
  async expectDeleteTeamValidation(expectedText?: string) {
  // Locate the delete validation paragraph
  const validationParagraph = this.page.locator('.delete-team-validation'); // adjust selector

  // Ensure it is visible
  await expect(validationParagraph).toBeVisible();

  // If expected text is provided, check exact text
  if (expectedText) {
    await expect(validationParagraph).toHaveText(expectedText);
  }

  console.log('Delete validation paragraph is visible:', await validationParagraph.textContent());
}

 async validateTeamCreated(teamName: string) {
    const editTeamHeading = this.page.locator(`xpath=//p[normalize-space()='Edit Team "${teamName}"']`);
    await expect(editTeamHeading).toBeVisible({ timeout: 5000 });
    console.log(`Team "${teamName}" is correctly displayed on Edit Team page`);
  }

// async deleteTeam() {
//   // Step 1: Click the Delete button
//   const deleteBtn = this.page.locator(
//     "//button[@class='base-button base-button--type-button button is-primary has-no-shadow is-danger']"
//   );
//   await expect(deleteBtn).toBeVisible({ timeout: 10000 });
//       await deleteBtn.scrollIntoViewIfNeeded();

//   await deleteBtn.click();
//   console.log("✅ Delete button clicked");

//   // Step 2: Wait for DELETE request while clicking "Do it!"
//   const confirmBtn = this.page.locator("//span[normalize-space()='Do it!']");
//   await expect(confirmBtn).toBeVisible({ timeout: 20000 });
//       await confirmBtn.scrollIntoViewIfNeeded();


//   // Wait for DELETE response and click confirm simultaneously
//   const [response] = await Promise.all([
//     this.page.waitForResponse(resp =>
//       resp.url().includes('/teams/') && resp.request().method() === 'DELETE'
//     ),
//     confirmBtn.click()
//   ]);

//   console.log("✅ 'Do it!' button clicked");

//   // Step 3: Assert DELETE response
//   expect(response.status()).toBe(200);
//   const json = await response.json();
//   expect(json.message).toBe('Successfully deleted.');
//   console.log('✅ Team deleted successfully via API:', json);
// }
async deleteTeam() {
  // Step 1: Locate the Delete button
  const deleteBtn = this.page.locator(
    "//button[@class='base-button base-button--type-button button is-primary has-no-shadow is-danger']"
  );

  // Wait until it's visible and attached, then click immediately
  await deleteBtn.waitFor({ state: 'visible', timeout: 10000 });

  // Click immediately; use force if DOM is dynamic
  await deleteBtn.click({ force: true });
  console.log("✅ Delete button clicked");

  // Step 2: Confirm "Do it!" button
  const confirmBtn = this.page.locator("//span[normalize-space()='Do it!']");
  await confirmBtn.waitFor({ state: 'visible', timeout: 20000 });
  
  // Wait for DELETE API while clicking confirm
  const [response] = await Promise.all([
    this.page.waitForResponse(resp =>
      resp.url().includes('/teams/') && resp.request().method() === 'DELETE'
    ),
    confirmBtn.click({ force: true }) // force click to avoid DOM detachment issues
  ]);

  console.log("✅ 'Do it!' button clicked");

  // Step 3: Validate DELETE response
  expect(response.status()).toBe(200);
  const json = await response.json();
  expect(json.message).toBe('Successfully deleted.');
  console.log('✅ Team deleted successfully via API:', json);

  // Optional: wait for notification to disappear
  const notification = this.page.locator('.notification');
  await notification.waitFor({ state: 'detached', timeout: 5000 });
  console.log('✅ Notification disappeared from the UI');
}
 }

