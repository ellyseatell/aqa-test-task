@skip
Feature: Team Management CRUD
  As a user
  I want to perform CRUD operations on teams
  So that I can manage my team list effectively

  Scenario: Create a new team
    Given I am logged in using valid email "eatell" and password "Welcome@123"
      And I am in teams menu
    When I create a team named "Alpha Team"
  #  Then the team "Alpha Team" should exist exactly once in the list

#   Scenario: Attempt to create a team that already exists
#     When I create a team named "Alpha Team"
#     Then I should see an error message "Team already exists"


#   Scenario: Edit an existing team
#     When I rename the team "Alpha Team" to "Beta Team"
#     Then the team "Beta Team" should exist exactly once in the list
#     And the team "Alpha Team" should not exist in the list

#   Scenario: Delete a team
#     When I delete the team "Beta Team"
#     Then the team "Beta Team" should not exist in the list