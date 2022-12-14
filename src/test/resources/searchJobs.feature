Feature: Search Jobs

  @apply @smoke @regression
  Scenario: Easy Apply Filter Test
    Given user navigate login page
    When user enter valid email and valid password
    And user should be able to login
    And user navigate jobs page
    And user should should have to navigate to job page
    And user search for jobs which is "qa engineer"
    And user fill location as "United States"
    And user select filter as "Easy Apply" on Filter Page
    Then user check results are filtered by "Easy Apply" on Filter Page
    When all results should have Easy Apply button


  @apply @smoke @regression
  Scenario: Past 24 Hours Filtered By All Filters Test
    Given user navigate login page
    When user enter valid email and valid password
    And user should be able to login
    And user navigate jobs page
    And user should should have to navigate to job page
    And user search for jobs which is "qa engineer"
    And user fill location as "United States"
    When user filter results by past24Hours
    And user should see results are filtered by past24Hours
    When all results should have Easy Apply button

  @apply @smoke @regression
  Scenario: Under 10 Applicants Filtered By All Filters Test
    Given user navigate login page
    When user enter valid email and valid password
    And user should be able to login
    And user navigate jobs page
    And user should should have to navigate to job page
    And user search for jobs which is "qa engineer"
    And user fill location as "United States"
    When user filter results by under10Applicants
    And user should see results are filtered under10Applicants
    When all results should have Easy Apply button



