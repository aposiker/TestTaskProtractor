Feature: Search computer
  As a user I want to be able to search computer by name in database

  Scenario: Check computer list
    Given I'm on a home page
    When I type "ASCI Blue" computer name in a search field and press search button
    Then I can see following computers:
      |Computer name|Introduced|Discontinued|Company|
      |ASCI Blue Mountain|-|-|-|
      |ASCI Blue Pacific|01 Jan 1998|-|IBM|
    When I type "ASCI Blue Pacific" computer name in a search field and press search button
    Then I can see "ASCI Blue Pacific" computer from the list
    And "ASCI Blue Pacific" computer have "01 Jan 1998" value in "Introduced" column
    And "ASCI Blue Pacific" computer have "IBM" value in "Company" column
    When I type "ASCI" computer name in a search field and press search button
    Then I can see following computers:
      |Computer name|Company|
      |ASCI White|IBM|
      |ASCI Purple|IBM|
    And "ASCI White" computer have "IBM" value in "Company" column
