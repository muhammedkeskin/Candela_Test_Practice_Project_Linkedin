package com.linkedin.steps;

import com.linkedin.pages.FilterPage;

public class FilterPageSteps extends FilterPage {


    public FilterPageSteps clickAllFiltersButton() {
        allFilterButton.click();
        return this;
    }

    public FilterPageSteps selectLastDay() {
        PastHours.click();
        return this;
    }

    public FilterPageSteps clickResultButton() {
        results.click();
        return this;
    }

    public FilterPage selectSortAsMostRecent() throws InterruptedException {
        wait(2);
        waitForVisibility(sortbyMostRecent,10);
        sortbyMostRecent.click();
        return this;
    }
    public FilterPageSteps selectPast24Hours() throws InterruptedException {
        waitForVisibility(Past24Hours,10);
        Past24Hours.click();
        return this;
    }

    public FilterPageSteps filterAsUnder10Applicants() throws InterruptedException {
        waitForVisibility(under10Appliciants,10);
        under10Appliciants.click();
        return this;
    }

    public void clickShowResultsButton() {
        showResultsButton.click();
    }

    public void clickFirstJob() {
        //waitForVisibility(firstJob,10);
        //waitForPageToLoad(20);
        //System.out.println("address = " + firstJob.getAttribute("href"));
        if (firstJob.isDisplayed()) {
            System.out.println("if içinde");
            firstJob.click();
        }
    }
}
