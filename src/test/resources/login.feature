Feature: Login

  @login @smoke @regression
  Scenario: Try to login with valid email and valid password
    Given user navigate login page
    When user enter valid email and valid password
    And user should be able to login

    ##############################################################################

  @login @smoke @regression
  Scenario: Try to login with valid email and invalid password
    Given user navigate login page
    When user enter valid email and invalid password
    And user should not be able to login

    ##############################################################################

  @login @smoke @regression
  Scenario: Try to login with invalid email and valid password
    Given user navigate login page
    When user enter invalid email and valid password
    And user should not be able to login

    ##############################################################################

  @login @smoke @regression
  Scenario: Try to login with valid email and empty password
    Given user navigate login page
    When user enter valid email and empty password
    And user should see empty information warning

    ##############################################################################

  @login @smoke @regression
  Scenario: Try to login with empty email and valid password
    Given user navigate login page
    When user enter empty email and valid password
    And user should see empty information warning



    //https://glot.io/new/java