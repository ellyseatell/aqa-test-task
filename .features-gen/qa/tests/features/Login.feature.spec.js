// Generated from: qa\tests\features\Login.feature
import { test } from "../../../../qa/fixtures/testContext.ts";

test.describe('User login with valid credentials', () => {

  test('Login with valid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user enters valid username', null, { page }); 
    await And('the user enters valid password'); 
    await And('the user submits the login form'); 
    await Then('the user should be logged in successfully', null, { page }); 
  });

  test.skip('Login with valid credentials stay logged in', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('I am on the login page'); 
    await When('the user enters valid username'); 
    await And('the user enters valid password'); 
    await And('choose to stay logged in'); 
    await And('the user submits the login form'); 
    await Then('the user should be logged in successfully'); 
  });

  test.skip('User login with invalid credentials', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('I am on the login page'); 
    await When('the user enters invalid username'); 
    await And('the user enters invalid password'); 
    await And('the user submits the login form'); 
    await Then('the error message "Wrong username or password." should be displayed'); 
  });

  test.skip('User tries SQL injection in login', { tag: ['@skip'] }, async ({ Given, When, Then, And }) => { 
    await Given('I am on the login page'); 
    await When('the user enters invalid username'); 
    await And('the user enters invalid password'); 
    await And('the user submits the login form'); 
    await Then('the error message "Wrong username or password." should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('qa\\tests\\features\\Login.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":4,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":6,"keywordType":"Action","textWithKeyword":"When the user enters valid username","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"And the user enters valid password","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":8,"keywordType":"Action","textWithKeyword":"And the user submits the login form","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":9,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":14,"pickleLine":11,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page"},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enters valid username"},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user enters valid password"},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And choose to stay logged in"},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And the user submits the login form"},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged in successfully"}]},
  {"pwTestLine":23,"pickleLine":20,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I am on the login page"},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user enters invalid username"},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And the user enters invalid password"},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And the user submits the login form"},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the error message \"Wrong username or password.\" should be displayed"}]},
  {"pwTestLine":31,"pickleLine":28,"skipped":true,"tags":["@skip"],"steps":[{"pwStepLine":32,"gherkinStepLine":29,"keywordType":"Context","textWithKeyword":"Given I am on the login page"},{"pwStepLine":33,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When the user enters invalid username"},{"pwStepLine":34,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And the user enters invalid password"},{"pwStepLine":35,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"And the user submits the login form"},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then the error message \"Wrong username or password.\" should be displayed"}]},
]; // bdd-data-end