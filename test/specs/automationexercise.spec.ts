import RegisterUser from "../pageobjects/registeruser.ts";
import UserLogin from "../pageobjects/userlogin.ts";

// This file contains the test cases for the Automation Exercise website

describe("Automation Exercise", () => {
  it("should open the homepage and verify the title", async () => {
    await RegisterUser.testCase1(); // Call the testCase1 method from RegisterUser class
    await UserLogin.testCase2(); // Call the testCase2 method from UserLogin class
  });
});