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

  
  async createTeam(teamName: string) {
  
    //  Fill the team name input
    const nameInput = this.page.locator('#teamName'); // adjust selector if needed
    await expect(nameInput).toBeVisible({ timeout: 5000 });
    await nameInput.fill(teamName);

    //  Click submit
    const submitBtn = this.page.locator(`xpath=//span[normalize-space()='Create']/parent::*`);
    await expect(submitBtn).toBeVisible({ timeout: 5000 });
    await submitBtn.click();

    console.log(`Team "${teamName}" created`);
  }

  async isTeamInListExactlyOnce(teamName: string): Promise<boolean> {
    // Locate the team list container
    const teamList = this.page.locator('.teams.box');
    await expect(teamList).toBeVisible({ timeout: 5000 });

    //  Locate all team items
    const teamItems = teamList.locator('li > a');

    // Get all text contents and trim spaces
    const actualItems = (await teamItems.allTextContents()).map(item => item.trim());
    console.log('All team names in list:', actualItems);

    //  Count how many times the teamName appears
    const occurrences = actualItems.filter(item => item === teamName).length;

    // 5Return true only if it appears exactly once
    const result = occurrences === 1;
    console.log(`Team "${teamName}" appears exactly once:`, result);

    return result;
  }
 async clickTeamByName(teamName: string): Promise<void> {
    // Locate the team list container
    const teamList = this.page.locator('.teams.box');
    await expect(teamList).toBeVisible({ timeout: 5000 });

    // Locate all team items (li > a)
    const teamItems = teamList.locator('li > a');

    // Get all text contents and trim
    const actualItems = (await teamItems.allTextContents()).map(item => item.trim());
    console.log('All team names in the list:', actualItems);

    // Find the index of the team
    const index = actualItems.findIndex(item => item === teamName);
    if (index === -1) {
      throw new Error(`Team "${teamName}" not found in the list`);
    }

    // Click the team using the index
    await teamItems.nth(index).click();
    console.log(`Clicked on team: "${teamName}"`);
  }


  async isTeamNotInList(teamName: string): Promise<boolean> {
  console.log('🔍 Searching for the team list...');

  const teamlist = this.page.locator('.teams.box');
  const noTeamsMsg = this.page.locator("//p[@class='has-text-centered has-text-grey is-italic']");

  if (await teamlist.count() > 0) {
    // Team list exists
    await teamlist.waitFor({ state: 'visible', timeout: 15000 });
    const teamListItems = teamlist.locator('li > a');

    const actualItems = (await teamListItems.allTextContents()).map(item => item.trim());
    console.log('All team names in list:', actualItems);

    // Return true if the teamName is NOT in the list
    return !actualItems.includes(teamName);

  } else if (await noTeamsMsg.count() > 0) {
    // No teams container, check the "no teams" message
    const msgText = (await noTeamsMsg.textContent())?.trim();
    console.log('No teams message found:', msgText);

    if (msgText === 'You are currently not part of any teams.') {
      return true;
    } else {
      throw new Error(`Unexpected message in place of team list: "${msgText}"`);
    }

  } else {
    // Neither container nor message exists — fail the test
    throw new Error('Neither team list nor "no teams" message found. Cannot verify if team is deleted.');
  }
}
}


