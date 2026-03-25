
Feature: Team Management CRUD
  As a user
  I want to perform CRUD operations on teams
  So that I can manage my team list effectively
@skip
  Scenario: Create a new team
    Given I am on the login page
    When the user enters valid username
    And the user enters valid password
    And the user submits the login form
    And the user should be logged in successfully
    And I am in teams menu and go to create team
    When I create a team
    Then team should be created
@skip
  Scenario: Create and Edit existing team

  Given I am on the login page
    When the user enters valid username
    And the user enters valid password
    And the user submits the login form
    And the user should be logged in successfully
    And I am in teams menu and go to create team
    When I create a team 
    And I am in teams menu   
    And team is found in the list
    And I click on the team to edit it
    And I update team name
    Then team should be updated


Scenario: Create , Edit and then Delete a team
  Given I am on the login page
    When the user enters valid username
    And the user enters valid password
    And the user submits the login form
    And the user should be logged in successfully
    And I am in teams menu and go to create team
    And I create a team 
    And I am in teams menu   
    And team is found in the list
    And I click on the team to edit it
    And I update team description
    And I am in teams menu   
    And I click on the team to edit it
    And delete it
    Then team should be deleted