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
  "error_message": "org.openqa.selenium.StaleElementReferenceException: stale element reference: element is not attached to the page document\n  (Session info: chrome\u003d108.0.5359.99)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-JKQ6A3Q\u0027, ip: \u0027192.168.1.27\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 108.0.5359.99, chrome: {chromedriverVersion: 108.0.5359.71 (1e0e3868ee06..., userDataDir: C:\\Users\\MUHAMM~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:58217}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 0c3ba58cb133b067dbf0dd660ad375e8\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat com.linkedin.steps.HomePageSteps.selectFilterOnFilterBar(HomePageSteps.java:30)\r\n\tat com.linkedin.step_defs.searchForStepdDefs.user_select_filter_as_on_Filter_Page(searchForStepdDefs.java:35)\r\n\tat ✽.user select filter as \"Easy Apply\" on Filter Page(file:///C:/Users/MuhammedKeskin/IdeaProjects/Candela_Test_Practice_Project_Linkedin/src/test/resources/searchJobs.feature:12)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user check results are filtered by \"Easy Apply\" on Filter Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_check_results_are_filtered_by_on_Filter_Page(java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.linkedin.steps.ResultPageSteps.checkIfLoggedIn(ResultPageSteps.java:51)\r\n\tat com.linkedin.step_defs.loginStepDefs.user_should_be_able_to_login(loginStepDefs.java:64)\r\n\tat ✽.user should be able to login(file:///C:/Users/MuhammedKeskin/IdeaProjects/Candela_Test_Practice_Project_Linkedin/src/test/resources/searchJobs.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should should have to navigate to job page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_should_have_to_navigate_to_job_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"qa engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_search_for_jobs_which_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter results by past24Hours",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_filter_results_by_past24Hours()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see results are filtered by past24Hours",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_see_results_are_filtered_by_past24Hours()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", "screenshot");
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
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat com.linkedin.steps.ResultPageSteps.checkIfLoggedIn(ResultPageSteps.java:51)\r\n\tat com.linkedin.step_defs.loginStepDefs.user_should_be_able_to_login(loginStepDefs.java:64)\r\n\tat ✽.user should be able to login(file:///C:/Users/MuhammedKeskin/IdeaProjects/Candela_Test_Practice_Project_Linkedin/src/test/resources/searchJobs.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user navigate jobs page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_navigate_jobs_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should should have to navigate to job page",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_should_have_to_navigate_to_job_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user search for jobs which is \"qa engineer\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_search_for_jobs_which_is(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user fill location as \"United States\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_fill_location_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user filter results by under10Applicants",
  "keyword": "When "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_filter_results_by_under10Applicants()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see results are filtered under10Applicants",
  "keyword": "And "
});
formatter.match({
  "location": "com.linkedin.step_defs.searchForStepdDefs.user_should_see_results_are_filtered_under10Applicants()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", "screenshot");
formatter.after({
  "status": "passed"
});
});