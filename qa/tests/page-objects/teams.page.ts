import { Page, Locator, expect } from '@playwright/test';

export class Teamspage {
  readonly page: Page;
  readonly openNewTeamFormButton: Locator;
readonly teamNameInput: Locator;
readonly submitCreateTeamButton: Locator; // submits the form


  constructor(page: Page) {
    this.page = page;

    // Using XPath for the login button
    this.openNewTeamFormButton = page.locator("xpath=//span[normalize-space()='Create a team']/parent::a");
    this.submitCreateTeamButton = page.locator('button:has-text("Create Team")'); 
 // Locator for all teams in the list
    this.teamNameInput = page.locator('#teamName'); // input for team name
    //this.teamlist = page.locator('.teams.box'); // use dot when class value has a space

  }

  
 async createTeam(name: string) {
    // Fill the team name input
  await this.teamNameInput.waitFor({ state: "visible" }); // waits until input is visible
await this.teamNameInput.fill(name);                   // fills the input
await this.submitCreateTeamButton.click();             // clicks the button
 
 }

async isTeamInListExactlyOnce(teamName: string): Promise<boolean> {
  // Locate the parent container
  const teamlist = this.page.locator('.teams.box');
  await expect(teamlist).toBeVisible();

  // Locate all team items
  const teamListItems = teamlist.locator('li > a');

  // Get all text contents and trim spaces
  const actualItems = (await teamListItems.allTextContents()).map(item => item.trim());

  console.log('All team names in list:', actualItems);

  // Count how many times the teamName appears
  const occurrences = actualItems.filter(item => item === teamName).length;

  // Return true only if it appears exactly once
  return occurrences === 1;
}

async isTeamNotInList(teamName: string): Promise<boolean> {
  // Locate the parent container
  const teamlist = this.page.locator('.teams.box');
  await expect(teamlist).toBeVisible();

  // Get all team items
  const teamListItems = teamlist.locator('li > a');

  // Get all text contents and trim spaces
  const actualItems = (await teamListItems.allTextContents()).map(item => item.trim());

  console.log('All team names in list:', actualItems);

  // Return true only if the teamName does NOT appear
  return !actualItems.includes(teamName);
}

}