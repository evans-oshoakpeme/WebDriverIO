class InvalidLogin {
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

  get invalidLoginMessage () {
    return $('//p[text()="Your email or password is incorrect!"]');
  }

  async invalidLogin() {
    await expect(this.loginTitle).toBeExisting(); //Verify there is a login title
    await expect(this.loginTitle).toHaveText('Login to your account'); //Verify the Login title has the text Login to your account
    await this.emailInput.setValue('taylorswift@mail.com'); // Fill the email textbox with 'Adam Smith'
    await this.passwordInput.setValue('password1234'); // Fill the password input with 'password123'
    await this.loginButton.click(); // Click on the login button
    await expect(this.invalidLoginMessage).toBeExisting(); // Verify the invalid log in message exists
    await expect(this.invalidLoginMessage).toHaveText('Your email or password is incorrect!') // Verify the text is visible
  }
}

export default new InvalidLogin();