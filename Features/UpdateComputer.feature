Feature: Update computer
  As a user I want to be able to update existing computer in database

  Scenario: Find computer to update and go to it's page
    Given I'm on a home page
    When I type comptuer's name to update in a search field and press search button
    And Click on found computer to update
    Then I should be redirected to computer's page

  Scenario: Update computer's info and save changes
    When I update compute's info
    And Press Save This Computer button
    Then I got redirected to home page and see alert message about computer update