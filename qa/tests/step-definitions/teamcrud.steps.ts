import { createBdd } from 'playwright-bdd';
import { LoginPage } from '../page-objects/login.page';
import { Teamspage } from '../page-objects/teams.page'

const { Given, When, Then } = createBdd();

let loginPage: LoginPage;
let teamspage: Teamspage;


Given('I am logged in using valid email {string} and password {string}', async ({page}, username, password) => {
  loginPage = new LoginPage(page);
    await loginPage.gotoVikunja(); 
    await loginPage.login(username,password)
  await loginPage.verifyMenuItems(['Overview', 'Upcoming','Projects','Labels' ,'Teams']);
});

Given('I am in teams menu', async ({page}) => {
  // Step: And I am in teams menu
  // From: qa\tests\features\teamcrud.feature:8:9
  //loginPage.goToMenu("Teams")
  //loginPage.teamsmenu.click();
  await page.goto('http://localhost:8080/teams');
  await page.waitForTimeout(3000); // waits 1 second

});

When('I create a team named {string}', async ({page}, teamname) => {
  // Step: When I create a team named "Alpha Team"
  // From: qa\tests\features\teamcrud.feature:9:5
  teamspage = new Teamspage (page);
  teamspage.openNewTeamFormButton.waitFor({ state: 'visible' }); // wait until visible
  teamspage.openNewTeamFormButton.click()
  teamspage.createTeam("teamname")

});

Then('the team {string} should exist exactly once in the list', async ({}, teamname) => {
  // Step: Then the team "Alpha Team" should exist exactly once in the list
  // From: qa\tests\features\teamcrud.feature:10:5
  loginPage.goToMenu("Teams")
  teamspage.isTeamInListExactlyOnce(teamname)

});
