// Generated from: qa\tests\features\createaccount.feature
import { test } from "../../../../qa/fixtures/testContext.ts";

test.describe('Create Account - Registration', () => {

  test('User creates a new account', async ({ Given, When, Then, And, email, page, password, username }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user clicks on Create account', null, { page }); 
    await And('the user is redirected to the registration page', null, { page }); 
    await And('the user enters a valid username', null, { username }); 
    await And('the user enters a valid email', null, { email }); 
    await And('the user enters a valid password', null, { password }); 
    await And('the user submits the registration form'); 
    await Then('the account should be created successfully', null, { email, password, username }); 
    await And('the user should be logged in', null, { page }); 
  });

  test('Registration with existing email', async ({ Given, When, Then, And, page }) => { 
    await Given('I am on the login page', null, { page }); 
    await When('the user clicks on Create account', null, { page }); 
    await And('the user is redirected to the registration page', null, { page }); 
    await And('the user enters a username that already exists'); 
    await And('the user enters an email that already exists'); 
    await And('the user enters a password'); 
    await And('the user submits the registration form'); 
    await Then('an error message "A user with this username already exists." should be displayed'); 
  });

});

// == technical section ==

test.use({
  $test: [({}, use) => use(test), { scope: 'test', box: true }],
  $uri: [({}, use) => use('qa\\tests\\features\\createaccount.feature'), { scope: 'test', box: true }],
  $bddFileData: [({}, use) => use(bddFileData), { scope: "test", box: true }],
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":8,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":9,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When the user clicks on Create account","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"And the user is redirected to the registration page","stepMatchArguments":[]},{"pwStepLine":10,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"And the user enters a valid username","stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":13,"keywordType":"Action","textWithKeyword":"And the user enters a valid email","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"And the user enters a valid password","stepMatchArguments":[]},{"pwStepLine":13,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"And the user submits the registration form","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then the account should be created successfully","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":17,"keywordType":"Outcome","textWithKeyword":"And the user should be logged in","stepMatchArguments":[]}]},
  {"pwTestLine":18,"pickleLine":19,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":20,"keywordType":"Context","textWithKeyword":"Given I am on the login page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When the user clicks on Create account","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"And the user is redirected to the registration page","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"And the user enters a username that already exists","stepMatchArguments":[]},{"pwStepLine":23,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"And the user enters an email that already exists","stepMatchArguments":[]},{"pwStepLine":24,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"And the user enters a password","stepMatchArguments":[]},{"pwStepLine":25,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"And the user submits the registration form","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then an error message \"A user with this username already exists.\" should be displayed","stepMatchArguments":[{"group":{"start":17,"value":"\"A user with this username already exists.\"","children":[{"start":18,"value":"A user with this username already exists.","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end