Feature: Search Jobs

  @apply
  Scenario: Positive Scenario
    Given user navigate login page
    When user enter email and password
    And user navigate jobs page
    And user search for jobs which is "qa engineer"
    And user fill location as "United States"