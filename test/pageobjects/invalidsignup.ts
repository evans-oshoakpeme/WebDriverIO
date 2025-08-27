class ExistingEmail {
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

  get errorMessage () {
    return $('//p[text()="Email Address already exist!"]');
  }

  async invalidSignUp () {
    await expect(this.signUpTitle).toBeExisting(); // Verify the sign-up title exists
    await expect(this.signUpTitle).toHaveText("New User Signup!"); // Verify the text of the sign-up title
    await this.nameInput.setValue("Adam Smith"); // Input the name
    await this.emailInput.setValue("adamsmith@mail.com"); // Input the email
    await this.signUpButton.click();
    await expect(this.errorMessage).toBeExisting(); // Verify the error message exists
    await expect(this.errorMessage).toHaveText("Email Address already exist!"); // Verify the text of the error message
  }
}

export default new ExistingEmail();