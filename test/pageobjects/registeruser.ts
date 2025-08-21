import {$} from '@wdio/globals'

// This class defines the page object for the registration user page
// It contains locators for various elements on the page
// and methods to interact with those elements.

class RegisterUser {
  get sliderSection () {
     return $('//section[@id="slider"]');
    };

  get signUpMenu () {
    return $('//a[@href="/login"]');
  }

  get signUpTitle () {
    return $('//h2[text()="New User Signup!"]');
  }

  get nameInput () {
    return $('//input[@data-qa="signup-name"]');
  }

  get emailInput () {
    return $('//input[@data-qa="signup-email"]');
  }

  get signUpButton () {
    return $('//button[@data-qa="signup-button"]');
  }

  get accountInfoTitle () {
    return $('//b[text()="Enter Account Information"]');
  }

  get radioButtonMale () {
    return $('//label[@for="id_gender1"]');
  }

  get radioButtonFemale () {
    return $('//label[@for="id_gender2"]');
  }

  get passwordInput () {
    return $('//input[@data-qa="password"]');
  }

  get daySelect () {
    return $('//select[@data-qa="days"]');
  }

  get monthSelect () {
    return $('//select[@data-qa="months"]');
  }

  get yearSelect () {
    return $('//select[@data-qa="years"]');
  }

  get newsletterCheckbox () {
    return $('//input[@id="newsletter"]');
  }

  get offersCheckbox () {
    return $('//input[@id="optin"]');
  }

  get firstNameInput () {
    return $('//input[@id="first_name"]');
  }

  get lastNameInput () {
    return $('//input[@id="last_name"]');
  }

  get companyInput () {
    return $('//input[@id="company"]');
  }

  get addressInput () {
    return $('//input[@id="address1"]');
  }

  get address2Input () {
    return $('//input[@id="address2"]');
  }

  get countrySelect () {
    return $('//select[@id="country"]');
  }

  get stateInput () {
    return $('//input[@id="state"]');
  }

  get cityInput () {
    return $('//input[@id="city"]');
  }

  get zipcodeInput () {
    return $('//input[@id="zipcode"]');
  }

  get mobileNumberInput () {
    return $('//input[@id="mobile_number"]');
  }

  get createAccountButton () {
    return $('//button[@data-qa="create-account"]');
  }

  get accountCreatedMessage () {
    return $('//h2[@data-qa="account-created"]');
  }

  get continueButton () {
    return $('//a[@data-qa="continue-button"]');
  }

  get loggedInAsMessage () {
    return $('//a[text()=" Logged in as "]');
  }

  get deleteAccountButton () {
    return $('//a[@href="/delete_account"]');
  }

  get accountDeletedMessage () {
    return $('//h2[@data-qa="account-deleted"]');
  }

  async firstTest() {
    await browser.url("https://automationexercise.com"); // Navigate to the homepage
    await expect(this.sliderSection).toBeExisting(); // Verify the slider section exists
    await this.signUpMenu.click(); // Click on the sign-up menu
    await expect(this.signUpTitle).toBeExisting(); // Verify the sign-up title exists
    await expect(this.signUpTitle).toHaveText("New User Signup!"); // Verify the text of the sign-up title
    await this.nameInput.setValue("Adam Smith"); // Input the name
    await this.emailInput.setValue("adamsmith@mail.com"); // Input the email
    await this.signUpButton.click();
    await expect(this.accountInfoTitle).toBeExisting(); // Verify the account info title exists
    // Verify the text of the account info title
    await expect(this.accountInfoTitle).toHaveText(
      "ENTER ACCOUNT INFORMATION"
    );
    await this.radioButtonMale.click(); // Select the Male radio button
    await this.passwordInput.setValue("password123"); // Input the password
    await this.daySelect.selectByVisibleText("1"); // Select the day
    await this.monthSelect.selectByVisibleText("January"); // Select the month
    await this.yearSelect.selectByVisibleText("1990"); // Select the year
    await this.newsletterCheckbox.click(); // Click the newsletter checkbox
    await this.offersCheckbox.click(); // Click the special offers checkbox
    await this.firstNameInput.setValue("Adam"); // Input the first name
    await this.lastNameInput.setValue("Smith"); // Input the last name
    await this.companyInput.setValue("Tech Solutions"); // Input the company name
    await this.addressInput.setValue("123 Tech Street"); // Input the address
    await this.address2Input.setValue("Suite 456"); // Input the address line 2
    await this.countrySelect.selectByVisibleText("United States"); // Select the country
    await this.stateInput.setValue("California"); // Input the state
    await this.cityInput.setValue("Los Angeles"); // Input the city
    await this.zipcodeInput.setValue("90001"); // Input the zipcode
    await this.mobileNumberInput.setValue("1234567890"); // Input the mobile number
    await this.createAccountButton.click(); // Click the create account button
    await expect(this.accountCreatedMessage).toBeExisting(); // Verify the account created message exists
    await expect(this.accountCreatedMessage).toHaveText(
      "ACCOUNT CREATED!"
    ); // Verify the text of the account created message 
    await this.continueButton.click(); // Click the continue button
    await expect(this.loggedInAsMessage).toBeExisting(); // Verify the logged in message exists
    await expect(this.loggedInAsMessage).toHaveText(
      "Logged in as Adam Smith"
    ); // Verify the text of the logged in message
    await this.deleteAccountButton.click(); // Click the delete account button
    await expect(this.accountDeletedMessage).toBeExisting(); // Verify the account deleted message exists
    await expect(this.accountDeletedMessage).toHaveText(
      "ACCOUNT DELETED!"
    ); // Verify the text of the account deleted message
    await this.continueButton.click(); // Click the continue after delete button
    await expect(this.sliderSection).toBeExisting(); // Verify the slider section exists after deletion
  
  }
}

export default new RegisterUser();