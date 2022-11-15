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

    @FindBy(xpath = "//li[contains(@class,'ember-view   jobs')]")
    public WebElement listedJobs;

}
