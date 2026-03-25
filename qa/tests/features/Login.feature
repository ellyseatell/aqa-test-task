 
Feature: User login with valid credentials

  Scenario: Login with valid credentials
    Given I am on the login page
    When the user enters valid username
    And the user enters valid password
    And the user submits the login form
    Then the user should be logged in successfully
@skip
  Scenario: Login with valid credentials stay logged in
    Given I am on the login page
    When the user enters valid username
    And the user enters valid password
    And choose to stay logged in 
    And the user submits the login form
    Then the user should be logged in successfully

@skip
Scenario: User login with invalid credentials
  Given I am on the login page
   When the user enters invalid username
    And the user enters invalid password
    And the user submits the login form
  Then the error message "Wrong username or password." should be displayed
@skip

  Scenario: User tries SQL injection in login
    Given I am on the login page
    When the user enters invalid username
    And the user enters invalid password
    And the user submits the login form
    Then the error message "Wrong username or password." should be displayed