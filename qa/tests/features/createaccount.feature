
Feature: Create Account - Registration

  As a new user
  I want to create an account
  So that I can access the application


  Scenario: User creates a new account
    Given I am on the login page
    When the user clicks on Create account
    And the user is redirected to the registration page
    And the user enters a valid username
    And the user enters a valid email
    And the user enters a valid password
    And the user submits the registration form
    Then the account should be created successfully
    And the user should be logged in


  Scenario: Registration with existing email
    Given I am on the login page
    When the user clicks on Create account
    And the user is redirected to the registration page
    And the user enters a username that already exists
    And the user enters a email that already exists
    And the user enters a password
    And the user submits the registration form
    Then an error message "A user with this username already exists." should be displayed

#   Scenario: Registration with invalid email
#     When the user clicks on Create account
#     And the user is redirected to the registration page
#     And the user enters email "invalid-email"
#     Then an error message "Please enter a valid email address." should be displayed

#   Scenario: Registration with weak password ( less than 8 characters)
#     When the user clicks on Create account
#     And the user is redirected to the registration page
#     And the user enters password "1234567"
#     Then an error message "Password must have at least 8 characters." should be displayed

# Scenario: Registration - Verify required fields validation on blur
#   When the user clicks on Create account
#   And the user is redirected to the registration page
#   And the user focuses on the username field and leaves it empty
#   And the user focuses on the email field and leaves it empty
#   And the user focuses on the password field and leaves it empty
#   Then validation error "Please provide a username." should be displayed for the username field
#   And validation error "Please enter a valid email address." should be displayed for the email field
#   And validation error "Please provide a password." should be displayed for the password field
#   And the "Create account" button should be disabled
