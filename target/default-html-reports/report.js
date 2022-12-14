$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Try to login with valid email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_valid_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to login with valid email and invalid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid email and invalid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_valid_email_and_invalid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to login with invalid email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter invalid email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_invalid_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to login with valid email and empty password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid email and empty password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_valid_email_and_empty_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see empty information warning",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_see_empty_information_warning()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Try to login with empty email and valid password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter empty email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_empty_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see empty information warning",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_see_empty_information_warning()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/searchJobs.feature");
formatter.feature({
  "name": "Search Jobs",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Easy Apply Filter Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_valid_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should should have to navigate to job page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_should_have_to_navigate_to_job_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for jobs which is \"qa engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_search_for_jobs_which_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select filter as \"Easy Apply\" on Filter Page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_select_filter_as_on_Filter_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user check results are filtered by \"Easy Apply\" on Filter Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_check_results_are_filtered_by_on_Filter_Page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "all results should have Easy Apply button",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.all_results_should_have_Easy_Apply_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Past 24 Hours Filtered By All Filters Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_valid_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should should have to navigate to job page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_should_have_to_navigate_to_job_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for jobs which is \"qa engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_search_for_jobs_which_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user filter results by past24Hours",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_filter_results_by_past24Hours()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see results are filtered by past24Hours",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_see_results_are_filtered_by_past24Hours()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c[fals]e\u003e but was:\u003c[tru]e\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.linkedin.steps.ResultPageSteps.checkIfResultsAreFilteredBy24hours(ResultPageSteps.java:73)\r\n\tat com.linkedin.step_defs.searchForStepdDefs.user_should_see_results_are_filtered_by_past24Hours(searchForStepdDefs.java:70)\r\n\tat ✽.user should see results are filtered by past24Hours(file:///C:/Users/MuhammedKeskin/IdeaProjects/Candela_Test_Practice_Project_Linkedin/src/test/resources/searchJobs.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "all results should have Easy Apply button",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.all_results_should_have_Easy_Apply_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Under 10 Applicants Filtered By All Filters Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@apply"
    },
    {
      "name": "@smoke"
    },
    {
      "name": "@regression"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user navigate login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_navigate_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter valid email and valid password",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_enter_valid_email_and_valid_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to login",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.loginStepDefs.user_should_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should should have to navigate to job page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_should_have_to_navigate_to_job_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search for jobs which is \"qa engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_search_for_jobs_which_is(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user filter results by under10Applicants",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_filter_results_by_under10Applicants()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should see results are filtered under10Applicants",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_see_results_are_filtered_under10Applicants()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.linkedin.steps.ResultPageSteps.checkIfResultsAreFilteredUnder10Applicants(ResultPageSteps.java:79)\r\n\tat com.linkedin.step_defs.searchForStepdDefs.user_should_see_results_are_filtered_under10Applicants(searchForStepdDefs.java:75)\r\n\tat ✽.user should see results are filtered under10Applicants(file:///C:/Users/MuhammedKeskin/IdeaProjects/Candela_Test_Practice_Project_Linkedin/src/test/resources/searchJobs.feature:40)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "all results should have Easy Apply button",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.all_results_should_have_Easy_Apply_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
formatter.after({
  "status": "passed"
});
});