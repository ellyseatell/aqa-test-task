import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../page-objects/login.page';
import { Teamspage } from '../page-objects/teams.page'
import { expect } from '@playwright/test'
import { test } from '../../fixtures/testContext';
import { globalData } from '../../fixtures/globaldata';
import { EditTeamOptions, EditteamPage } from '../page-objects/Editteam.page';



const { Given, When, Then } = createBdd();

let loginPage: LoginPage;
let teamspage: Teamspage;
let editteampage : EditteamPage;


Given('I am in teams menu and go to create team', async ({page}) => {
   loginPage = new LoginPage(page);
  // Step: And I am in teams menu
  // From: qa\tests\features\teamcrud.feature:8:9
  loginPage.goToMenu("Teams")
   const createBtn = page.locator(`xpath=//span[normalize-space()='Create a team']/parent::a`);

    // Wait until the button is visible
    await expect(createBtn).toBeVisible({ timeout: 5000 });

    // Click the button
    await createBtn.click();

    console.log('Clicked "Create a team" button');
    

});

Given('I am in teams menu', async ({page}) => {
   loginPage = new LoginPage(page);
  
  loginPage.goToMenu("Teams")
    

});


When('I create a team', async ({ page }) => {
    const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');

  teamspage = new Teamspage(page);

await teamspage.createTeam(teamName);

  //console.log('Created team from globalData:', globalData.createdteam.teamname);
});


Then('team should be created', async ({page}, teamname) => {
  // Step: Then the team "Alpha Team" should exist exactly once in the list
  // From: qa\tests\features\teamcrud.feature:10:5
  const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');
    editteampage = new EditteamPage(page);
editteampage.validateTeamCreated(teamName)
await expect(editteampage.saveteambtn).toBeVisible();

});

When('team is found in the list', async ({page}) => {
  // Step: And team is found in the list
  // From: qa\tests\features\teamcrud.feature:25:5
  const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');
  loginPage.goToMenu("Teams"),
  teamspage.isTeamInListExactlyOnce(teamName)
});

When('I click on the team to edit it', async ({}) => {
  // Step: And I click on the team to edit it
  // From: qa\tests\features\teamcrud.feature:26:5
  const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');
    await teamspage.clickTeamByName(teamName);

});

When('I update team description', async ({page}) => {
  // Step: And I fill in updated team name
  // From: qa\tests\features\teamcrud.feature:27:5
editteampage= new EditteamPage(page);
const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');

await editteampage.editTeamFlex(teamName, {
  newDescription: 'This is a test description',
});
});


Then('team should be updated', async ({}) => {
  // Step: Then team should be updated
  // From: qa\tests\features\teamcrud.feature:29:5
  const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');
    loginPage.goToMenu("Teams"),
  teamspage.isTeamInListExactlyOnce(teamName)
});

When('delete it', async ({page}) => {
  // Step: And delete it
  // From: qa\tests\features\teamcrud.feature:42:5
  editteampage = new EditteamPage(page);
  editteampage.deleteTeam()
});

Then('team should be deleted', async ({page}) => {
  // Step: Then team should be deleted
  // From: qa\tests\features\teamcrud.feature:43:5
  const teamName = globalData.createdteam?.teamname;
  if (!teamName) throw new Error('No global team found');
  loginPage =new LoginPage(page);
    loginPage.goToMenu("Teams")
  const teamspage = new Teamspage(page);
  const result = await teamspage.isTeamNotInList(teamName);
  expect(result).toBeTruthy();
});
