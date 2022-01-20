Feature: Test the Sign up flow

  Scenario Outline: Sign up flow
    Given I am Sign Up in "<userName>" "<email>" "<password>"
    Then I click "Sign up" button
    When I navigate to "https://next-realworld.vercel.app/" page
    Then I see title "conduit"
    And I check my "<userName>" was created

    Examples:
      | userName | email     | password |
      | userAuto | randEmail | randPass |