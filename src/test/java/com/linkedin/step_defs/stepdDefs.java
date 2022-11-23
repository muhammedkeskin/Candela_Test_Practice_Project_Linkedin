package com.linkedin.step_defs;

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

    @Then("user check results are filtered by {string} on Filter Page")
    public void user_check_results_are_filtered_by_on_Filter_Page(String filterName) {
        homePageSteps.checkIfFilteredByFilterbar(filterName);
    }

    @When("user filter with all filters")
    public void user_filter_with_all_filters() {
        filterPageSteps.clickAllFiltersButton()
            .selectLastDay()
            .clickResultButton();
    }
}