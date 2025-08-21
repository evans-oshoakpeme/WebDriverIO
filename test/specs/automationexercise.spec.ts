import RegisterUser from "../pageobjects/registeruser.ts";

// This file contains the test cases for the Automation Exercise website

describe("Automation Exercise", () => {
  it("should open the homepage and verify the title", async () => {
    await RegisterUser.firstTest(); 
  });
});