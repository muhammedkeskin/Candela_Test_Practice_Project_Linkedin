package com.linkedin.exaples;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class jsExecute3 {

    public static void main(String[] args) throws InterruptedException {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();

        driver.get("http://practice.cybertekschool.com/infinite_scroll");

        driver.manage().window().maximize();

        JavascriptExecutor jse = (JavascriptExecutor) driver;

        for (int i=0;i<10;i++) {
            Thread.sleep(1000);
            jse.executeScript("window.scrollBy(0,750)");
        }

        for(int i=0;i<10;i++) {
            Thread.sleep(1000);
            jse.executeScript("window.scrollBy(0,-500)");
        }
    }
}
