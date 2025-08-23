class UserLogin {
  get sliderSection () {
    return $('//section[@id="slider"]');
  };
  
  get signUpMenu () {
    return $('//a[@href="/login"]');
  }

  get loginTitle () {
    return $('//h2[text()="Login to your account"]');
  }

  get emailInput () {
    return $('//input[@data-qa="login-email"]');
  }

  get passwordInput () {
    return $('//input[@data-qa="login-password"]');
  }

  get loginButton () {
    return $('//button[@data-qa="login-button"]');
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

  get continueButton () {
    return $('//a[@data-qa="continue-button"]');
  }

  async testCase2() {
    /*await browser.url("https://automationexercise.com"); // Navigate to the homepage
    await expect(this.sliderSection).toBeExisting(); // Verify the slider section exists
    await this.signUpMenu.click(); // Click on the sign-up menu*/
    await expect(this.loginTitle).toBeExisting(); //Verify there is a login title
    await expect(this.loginTitle).toHaveText('Login to your account'); //Verify the Login title has the text Login to your account
    await this.emailInput.setValue('adamsmith@mail.com'); // Fill the email textbox with 'Adam Smith'
    await this.passwordInput.setValue('password123'); // Fill the password input with 'password123'
    await this.loginButton.click(); // Click on the login button
    await expect(this.loggedInAsMessage).toBeExisting(); // Verify the logged in as "Username" exists
    await expect(this.loggedInAsMessage).toHaveText('Logged in as Adam Smith') // Verify the text is visible
    await this.deleteAccountButton.click(); // Click on the Delete account hyperlink
    await expect(this.accountDeletedMessage).toBeExisting(); // Verify the account deletion message exists
    await expect(this.accountDeletedMessage).toHaveText('ACCOUNT DELETED!') // Verify the text is visible
    await this.continueButton.click(); // Click on the continue button
    await expect(this.sliderSection).toBeExisting(); // Verify the slider section exists after deletion
  }
}

export default new UserLogin();