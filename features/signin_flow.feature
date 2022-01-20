
Feature: Test the Signin flow

  Scenario Outline: Signin flow
    Given I am logged in as "<email>" "<password>"
    Then I click "Sign in" button
    When I navigate to "https://next-realworld.vercel.app/" page
    Then I see title "conduit"
    And I check my "<userName>"

    Examples:
      | userName | email    | password |
      | TestDima | logEmail | logPass  |