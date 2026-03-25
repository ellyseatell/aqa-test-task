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

  test('Login with valid credentials stay logged in', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user enters valid username', null, { page }); 
    await And('the user enters valid password'); 
    await And('choose to stay logged in'); 
    await And('the user submits the login form'); 
    await Then('the user should be logged in successfully', null, { page }); 
  });

  test('User login with invalid credentials', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user enters invalid username', null, { page }); 
    await And('the user enters invalid password', null, { page }); 
    await And('the user submits the login form'); 
    await Then('the error message "Wrong username or password." should be displayed'); 
  });

  test('User tries SQL injection in login', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user enters invalid username', null, { page }); 
    await And('the user enters invalid password', null, { page }); 
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
  {"pwTestLine":14,"pickleLine":11,"tags":[],"steps":[{"pwStepLine":15,"gherkinStepLine":12,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"When the user enters valid username","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user enters valid password","stepMatchArguments":[]},{"pwStepLine":18,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And choose to stay logged in","stepMatchArguments":[]},{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Action","textWithKeyword":"And the user submits the login form","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"Then the user should be logged in successfully","stepMatchArguments":[]}]},
  {"pwTestLine":23,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":24,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When the user enters invalid username","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And the user enters invalid password","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And the user submits the login form","stepMatchArguments":[]},{"pwStepLine":28,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then the error message \"Wrong username or password.\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"Wrong username or password.\"","children":[{"start":19,"value":"Wrong username or password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":31,"pickleLine":27,"tags":[],"steps":[{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When the user enters invalid username","stepMatchArguments":[]},{"pwStepLine":34,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"And the user enters invalid password","stepMatchArguments":[]},{"pwStepLine":35,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"And the user submits the login form","stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then the error message \"Wrong username or password.\" should be displayed","stepMatchArguments":[{"group":{"start":18,"value":"\"Wrong username or password.\"","children":[{"start":19,"value":"Wrong username or password.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end