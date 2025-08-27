import RegisterUser from "../pageobjects/registeruser.ts";
import UserLogin from "../pageobjects/userlogin.ts";
import InvalidLogin from "../pageobjects/invalidlogin.ts";

// This file contains the test cases for the Automation Exercise website

describe("Automation Exercise", () => {
  it("should open the homepage and verify the title", async () => {
    await RegisterUser.registerLogout(); // Call the register and logout test case method from RegisterUser class
    await InvalidLogin.invalidLogin(); // Call the invalid login test case method from InvalidLogin class
    await UserLogin.loginDelete(); // Call the login and delete account test case method from UserLogin class
  });
});