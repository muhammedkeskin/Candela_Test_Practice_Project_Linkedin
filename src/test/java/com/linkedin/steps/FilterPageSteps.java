package com.linkedin.steps;

import com.linkedin.pages.FilterPage;

public class FilterPageSteps extends FilterPage {


    public FilterPageSteps clickAllFiltersButton() {
        waitForPageToLoad(10);
        waitForVisibility(allFiltersButton,20);
        allFilterButton.click();
        return this;
    }

    public FilterPageSteps selectPast24Hours() {
        waitFor(2);
        Past24Hours.click();
        return this;
    }

    public FilterPageSteps filterAsUnder10Applicants() {
        waitFor(2);
        under10Appliciants.click();
        return this;
    }

    public void clickShowResultsButton() {
        showResultsButton.click();
    }
}
