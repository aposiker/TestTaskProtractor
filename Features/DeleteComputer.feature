Feature: Delete computer from database
  As a user I want to be able to delete computer from database

  Scenario: Delete computer
    Given I'm on a home page
    When I type comptuer's name to delete in a search field and press search button
    And Click on found computer to delete
    Then I should be redirected to computer's page
    When I press Delete This Computer button
    Then I got redirected to home page and see alert message about computer delete