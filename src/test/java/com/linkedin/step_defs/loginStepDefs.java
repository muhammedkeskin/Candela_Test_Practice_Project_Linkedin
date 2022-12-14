package com.linkedin.step_defs;

import com.linkedin.steps.LoginPageSteps;
import com.linkedin.steps.ResultPageSteps;
import com.linkedin.utilities.ConfigurationReader;
import com.linkedin.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.When;

public class loginStepDefs {

    LoginPageSteps loginPageSteps=new LoginPageSteps();
    ResultPageSteps resultPageSteps=new ResultPageSteps();

    @Given("user navigate login page")
    public void user_navigate_login_page() {
        String url= ConfigurationReader.get("url");
        Driver.get().get(url);
    }

    @When("user enter valid email and valid password")
    public void user_enter_valid_email_and_valid_password() {
        String email=ConfigurationReader.get("validEmail");
        String password=ConfigurationReader.get("validPassword");

        loginPageSteps.login(email,password);
    }

    @When("user enter valid email and invalid password")
    public void user_enter_valid_email_and_invalid_password() {
        String email=ConfigurationReader.get("validEmail");
        String password=ConfigurationReader.get("invalidPassword");

        loginPageSteps.login(email,password);
    }

    @When("user enter invalid email and valid password")
    public void user_enter_invalid_email_and_valid_password() {
        String email=ConfigurationReader.get("invalidEmail");
        String password=ConfigurationReader.get("validPassword");

        loginPageSteps.login(email,password);
    }

    @When("user enter valid email and empty password")
    public void user_enter_valid_email_and_empty_password() {
        String email=ConfigurationReader.get("validEmail");
        String password=ConfigurationReader.get("emptyPassword");

        loginPageSteps.login(email,password);
    }

    @When("user enter empty email and valid password")
    public void user_enter_empty_email_and_valid_password() {
        String email=ConfigurationReader.get("emptyEmail");
        String password=ConfigurationReader.get("validPassword");

        loginPageSteps.login(email,password);
    }

    @And("user should be able to login")
    public void user_should_be_able_to_login() {
        resultPageSteps.checkIfLoggedIn();
    }

    @And("user should not be able to login")
    public void user_should_not_be_able_to_login() {
        resultPageSteps.checkIfNotLoggedIn();
    }

    @And("user should see empty information warning")
    public void user_should_see_empty_information_warning() {
        resultPageSteps.checkIfEmptyInformationWarningIsAvailable();
    }

}
