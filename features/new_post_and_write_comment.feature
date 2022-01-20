
Feature: Create New Post and write a comment

  Scenario Outline: New Post and write a comment
    Given I am logged in as "<email>" "<password>"
    Then I click "Sign in" button
    When I navigate to "https://next-realworld.vercel.app/" page
    And I click on New Post link
    Then I navigate to "https://next-realworld.vercel.app/editor/new" page
    When I fill Article Title field "Become smarter in just 5 minutes."
    Then I fill What this article about field "Get the daily email that makes reading the news actually enjoyable."
    And I fill Write your article field "Stay informed and entertained, for free."
    Then I fill Enter tags field "#progress"
    And I click "Publish Article" button
    Then I click "Publish Article" button
    When I navigate to "https://next-realworld.vercel.app/" page
    Then I check if my name is showing as "TestDima"
    And I check if Article Title and What this article about is the same as we posted "Become smarter in just 5 minutes." and "Get the daily email that makes reading the news actually enjoyable."
    When I click on Read more link
    Then I navigate to "https://next-realworld.vercel.app/article" page
    And I write a comment "Welcome to the Morning Brew page."
    Then I click "Post Comment" button
    And I check my comment "Welcome to the Morning Brew page." if was posted

    Examples:
      | email    | password |
      | logEmail | logPass  |
