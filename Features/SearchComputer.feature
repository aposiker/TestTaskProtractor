Feature: Search computer
  As a user I want to be able to serach computer by name in database

  Scenario: Search computer by name
    Given I'm on a home page
    When I type comptuer's name in a search field and press search button
    Then If computer with typed name exists, it should be displayed