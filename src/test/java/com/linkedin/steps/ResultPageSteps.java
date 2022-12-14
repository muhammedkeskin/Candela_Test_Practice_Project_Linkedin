package com.linkedin.steps;

import com.linkedin.pages.ResultsPage;
import com.linkedin.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ResultPageSteps extends ResultsPage {

    private List<WebElement> jobs;
    private List<WebElement> easyApplyButtonsList;
    private List<WebElement> signOutButton;
    private List<WebElement> emptyInformationWarning;
    private List<WebElement> under10ApplicantsFiltered;
    private String currentURL;

    public void checkIfAllResultsHaveEasyApplyButton() {
        scrollDown();
        scrollUp();
        checkEasyApplyButton();
    }

    public void scrollDown() {
        for(int i=0;i<10;i++) {
            firstJob.sendKeys(Keys.PAGE_DOWN);
        }
    }

    public void scrollUp() {
        for(int i=0;i<10;i++) {
            firstJob.sendKeys(Keys.PAGE_UP);
        }
    }

    public void checkEasyApplyButton() {
        jobs=Driver.get().findElements(By.xpath("//a[@class='disabled ember-view job-card-container__link job-card-list__title']"));
        for(int i=1;i<=jobs.size();i++) {
            easyApplyButtonsList=Driver.get().findElements(By.cssSelector(".jobs-apply-button.artdeco-button.artdeco-button--3.artdeco-button--primary.ember-view"));
            Driver.get().findElement(By.xpath("(//a[@class='disabled ember-view job-card-container__link job-card-list__title'])["+i+"]")).click();
            waitFor(2);
            Assert.assertTrue("Easy Apply Button Not Exist",easyApplyButtonsList.size()>0);
        }
    }

    public void checkIfLoggedIn() {
        signOutButton=Driver.get().findElements(By.xpath("//div[contains(@class,'me-content')]"));
        Assert.assertTrue(signOutButton.size()>0);
    }

    public void checkIfNotLoggedIn() {
        currentURL=Driver.get().getCurrentUrl();
        Assert.assertTrue(currentURL.contains("login-submit"));
    }

    public void checkIfEmptyInformationWarningIsAvailable() {
        emptyInformationWarning=Driver.get().findElements(By.xpath("//p[@class='alert-content']"));
        Assert.assertTrue(emptyInformationWarning.size()>0);
    }

    public void checkIfNavigateToJobsPage() {
        waitFor(3);
        currentURL=Driver.get().getCurrentUrl();
        Assert.assertTrue(currentURL.contains("/jobs/"));
    }

    public void checkIfResultsAreFilteredBy24hours() {
        waitFor(3);
        String attribute=past24HoursFiltered.getAttribute("aria-expanded");
        Assert.assertEquals(attribute,"false");
    }

    public void checkIfResultsAreFilteredUnder10Applicants() {
        waitFor(3);
        under10ApplicantsFiltered=Driver.get().findElements(By.xpath("//button[contains(@aria-label,'Under 10 applicants filter')]"));
        System.out.println("size: "+under10ApplicantsFiltered.size());
        Assert.assertTrue(under10ApplicantsFiltered.size()>0);
    }

}
