package com.linkedin.steps;

import com.linkedin.pages.HomePage;
import com.linkedin.utilities.Driver;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;

public class HomePageSteps extends HomePage {

    public void navigateJobPage() {
        waitForVisibility(jobsButton,5);
        jobsButton.click();
    }

    public void searchForJob(String job) {
        waitForVisibility(searchInbox, 15);
        searchInbox.sendKeys(job);
        searchInbox.sendKeys(Keys.ENTER);
    }

    public void fillLocationInfo(String location) {
        waitForVisibility(locationInput,10);
        locationInput.clear();
        locationInput.sendKeys(location);
        locationInput.sendKeys(Keys.ENTER);
    }

    public void selectFilterOnFilterBar(String filterName) {
        Driver.get().findElement(By.xpath("//button[contains(@aria-label,'"+filterName+" filter')]")).click();
    }

    public void checkIfFilteredByFilterbar(String filterName) {
        waitFor(5);
        String attribute = Driver.get().findElement(By.xpath("//button[contains(@aria-label,'"+filterName+" filter')]")).getAttribute("aria-checked");
        Assert.assertEquals( filterName + "is not selected","true", attribute);
    }
}
