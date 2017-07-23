Feature: Add new computer As a user I want to be able to add new computer to the list
  Scenario: Go to add computer page
    Given I'm on a home page
    When I press Add computer button
    Then I got redirect to Add computer page

  Scenario: Add computer
    When I fill out computer info
      And press Add This Computer button
    Then I got redirected to hompage and see alert message about added computer


