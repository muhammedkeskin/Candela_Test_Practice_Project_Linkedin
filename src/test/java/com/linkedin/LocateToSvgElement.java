package com.linkedin;

import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class LocateToSvgElement {

    public static void main(String[] args) {

        WebDriverManager.chromedriver().setup();
        WebDriver driver = new ChromeDriver();
        driver.get("https://www.google.com");

        String str = driver.findElement(By.cssSelector("svg[class='goxjub']")).getAttribute("focusable");
        System.out.println("attribute: "+str);
    }

}
