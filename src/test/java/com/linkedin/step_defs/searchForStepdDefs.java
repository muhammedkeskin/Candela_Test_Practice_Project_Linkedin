package com.linkedin.step_defs;

import com.linkedin.steps.FilterPageSteps;
import com.linkedin.steps.HomePageSteps;
import com.linkedin.steps.ResultPageSteps;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class searchForStepdDefs {

    HomePageSteps homePageSteps=new HomePageSteps();
    FilterPageSteps filterPageSteps=new FilterPageSteps();
    ResultPageSteps resultPageSteps=new ResultPageSteps();


    @Given("user navigate jobs page")
    public void user_navigate_jobs_page() throws InterruptedException {
        homePageSteps.navigateJobPage();
    }

    @And("user search for jobs which is {string}")
    public void user_search_for_jobs_which_is(String job) {
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

    @When("user filter results by past24Hours")
    public void user_filter_results_by_past24Hours() {
        filterPageSteps.clickAllFiltersButton()
                .selectPast24Hours()
                .clickShowResultsButton();
    }

    @When("user filter results by under10Applicants")
    public void user_filter_results_by_under10Applicants() {
        filterPageSteps.clickAllFiltersButton()
                .filterAsUnder10Applicants()
                .clickShowResultsButton();
    }

    @When("all results should have Easy Apply button")
    public void all_results_should_have_Easy_Apply_button() {
        resultPageSteps.refreshPage();
        resultPageSteps.checkIfAllResultsHaveEasyApplyButton();
    }

    @When("user should should have to navigate to job page")
    public void user_should_should_have_to_navigate_to_job_page() {
        resultPageSteps.checkIfNavigateToJobsPage();
    }

    @When("user should see results are filtered by past24Hours")
    public void user_should_see_results_are_filtered_by_past24Hours() {
        resultPageSteps.checkIfResultsAreFilteredBy24hours();
    }

    @When("user should see results are filtered under10Applicants")
    public void user_should_see_results_are_filtered_under10Applicants() {
        resultPageSteps.checkIfResultsAreFilteredUnder10Applicants();
    }

}