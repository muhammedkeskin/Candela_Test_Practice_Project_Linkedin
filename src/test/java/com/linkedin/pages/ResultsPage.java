package com.linkedin.pages;

import com.linkedin.utilities.BrowserUtils;
import com.linkedin.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ResultsPage extends BrowserUtils {

    public ResultsPage(){
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy (xpath = "(//a[@class='disabled ember-view job-card-container__link job-card-list__title'])[1]")
    public WebElement firstJob;

    @FindBy (xpath = "//button[contains(@aria-label,'Date posted filter. Past 24 hours filter is currently applied')]")
    public WebElement past24HoursFiltered;

}
