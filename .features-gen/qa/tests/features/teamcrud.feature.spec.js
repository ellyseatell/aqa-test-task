// Generated from: qa\tests\features\teamcrud.feature
import { test } from "../../../../qa/fixtures/testContext.ts";

test.describe('Team Management CRUD', () => {

  test.skip('Create a new team', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('I am on the login page'); 
    await When('the user enters valid username'); 
    await And('the user enters valid password'); 
    await And('the user submits the login form'); 
    await And('the user should be logged in successfully'); 
    await And('I am in teams menu and go to create team'); 
    await When('I create a team'); 
    await Then('team should be created'); 
  });

  test.skip('Create and Edit existing team', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('I am on the login page'); 
    await When('the user enters valid username'); 
    await And('the user enters valid password'); 
    await And('the user submits the login form'); 
    await And('the user should be logged in successfully'); 
    await And('I am in teams menu and go to create team'); 
    await When('I create a team'); 
    await And('I am in teams menu'); 
    await And('team is found in the list'); 
    await And('I click on the team to edit it'); 
    await And('I update team name'); 
    await Then('team should be updated'); 
  });

  test('Create , Edit and then Delete a team', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user enters valid username', null, { page }); 
    await And('the user enters valid password'); 
    await And('the user submits the login form'); 
    await And('the user should be logged in successfully', null, { page }); 
    await And('I am in teams menu and go to create team', null, { page }); 
    await And('I create a team', null, { page }); 
    await And('I am in teams menu', null, { page }); 
    await And('team is found in the list', null, { page }); 
    await And('I click on the team to edit it'); 
    await And('I update team description', null, { page }); 
    await And('I am in teams menu', null, { page }); 
    await And('I click on the team to edit it'); 
    await And('delete it', null, { page }); 
    await Then('team should be deleted', null, { page }); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('qa\\tests\\features\\teamcrud.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":7,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":7,"gherkinStepLine":8,"keywordType":"Context","textWithKeyword":"Given I am on the login page"},{"pwStepLine":8,"gherkinStepLine":9,"keywordType":"Action","textWithKeyword":"When the user enters valid username"},{"pwStepLine":9,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"And the user enters valid password"},{"pwStepLine":10,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user submits the login form"},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user should be logged in successfully"},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And I am in teams menu and go to create team"},{"pwStepLine":13,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When I create a team"},{"pwStepLine":14,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then team should be created"}]},
  {"pwTestLine":17,"pickleLine":17,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":18,"gherkinStepLine":19,"keywordType":"Context","textWithKeyword":"Given I am on the login page"},{"pwStepLine":19,"gherkinStepLine":20,"keywordType":"Action","textWithKeyword":"When the user enters valid username"},{"pwStepLine":20,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"And the user enters valid password"},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And the user submits the login form"},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And the user should be logged in successfully"},{"pwStepLine":23,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And I am in teams menu and go to create team"},{"pwStepLine":24,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When I create a team"},{"pwStepLine":25,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And I am in teams menu"},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"And team is found in the list"},{"pwStepLine":27,"gherkinStepLine":28,"keywordType":"Action","textWithKeyword":"And I click on the team to edit it"},{"pwStepLine":28,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"And I update team name"},{"pwStepLine":29,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then team should be updated"}]},
  {"pwTestLine":32,"pickleLine":33,"tags":[],"steps":[{"pwStepLine":33,"gherkinStepLine":34,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When the user enters valid username","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":36,"keywordType":"Action","textWithKeyword":"And the user enters valid password","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"And the user submits the login form","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"And the user should be logged in successfully","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"And I am in teams menu and go to create team","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":40,"keywordType":"Action","textWithKeyword":"And I create a team","stepMatchArguments":[]},{"pwStepLine":40,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"And I am in teams menu","stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":42,"keywordType":"Action","textWithKeyword":"And team is found in the list","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":43,"keywordType":"Action","textWithKeyword":"And I click on the team to edit it","stepMatchArguments":[]},{"pwStepLine":43,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"And I update team description","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"And I am in teams menu","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":46,"keywordType":"Action","textWithKeyword":"And I click on the team to edit it","stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":47,"keywordType":"Action","textWithKeyword":"And delete it","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":48,"keywordType":"Outcome","textWithKeyword":"Then team should be deleted","stepMatchArguments":[]}]},
]; // bdd-data-end