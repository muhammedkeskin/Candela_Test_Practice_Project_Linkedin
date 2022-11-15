package com.linkedin.step_defs;

import com.linkedin.pages.ResultsPage;
import com.linkedin.steps.FilterPageSteps;
import com.linkedin.steps.HomePageSteps;
import com.linkedin.steps.LoginPageSteps;
import com.linkedin.utilities.ConfigurationReader;
import com.linkedin.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class stepdDefs {

    LoginPageSteps loginPageSteps=new LoginPageSteps();
    HomePageSteps homePageSteps=new HomePageSteps();
    FilterPageSteps filterPageSteps=new FilterPageSteps();
    ResultsPage resultsPage=new ResultsPage();

    @Given("user navigate login page")
    public void user_navigate_login_page() {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("user enter email and password")
    public void user_enter_email_and_password() {
        String email=ConfigurationReader.get("email");
        String password=ConfigurationReader.get("password");

        loginPageSteps.login(email,password);
    }

    @Given("user navigate jobs page")
    public void user_navigate_jobs_page() throws InterruptedException {
        homePageSteps.navigateJobPage();
    }

    @And("user search for jobs which is {string}")
    public void userSearchForJobsWhichIs(String job) {
        homePageSteps.searchForJob(job);
    }

    @When("user fill location as {string}")
    public void user_fill_location_as(String location) {
        homePageSteps.fillLocationInfo(location);
    }

    @When("user select filter as {string} on Filter Page")
    public void user_select_filter_as_on_Filter_Page(String filterName) {
        homePageSteps.selectFilterOnFilterBar(filterName);
    }
}