import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

class ContactUs {
  get contactUsLink() {
    return $('//a[@href="/contact_us"]');
  }

  get pageTitle() {
    return $('//h2[text()="Get In Touch"]');
  }

  get nameInput() {
    return $('//input[@data-qa="name"]');
  }

  get emailInput() {
    return $('//input[@data-qa="email"]');
  }

  get subjectInput() {
    return $('//input[@data-qa="subject"]');
  }

  get messageTextarea() {
    return $('//textarea[@data-qa="message"]');
  }

  get uploadFileInput() {
    return $('//input[@type="file"]');
  }

  get submitButton() {
    return $('//input[@data-qa="submit-button"]');
  }

  get successMessage() {
    return $('//div[@class="status alert alert-success"]');
  }

  get homeButton() {
    return $('//a[@class="btn btn-success"]');
  }

  async contactUsForm() {
    await this.contactUsLink.click(); // Click on the Contact Us link
    await expect(this.pageTitle).toBeExisting(); // Verify the page title exists
    await expect(this.pageTitle).toHaveText('GET IN TOUCH'); // Verify the page title text
    await this.nameInput.setValue('Adam Smith'); // Fill the name input with 'Adam Smith'
    await this.emailInput.setValue('adamsmith@mail.com'); // Fill the email input with '
    await this.subjectInput.setValue('Test Subject'); // Fill the subject input with 'Test Subject'
    await this.messageTextarea.setValue('This is a test message.'); // Fill the message
    const currentDir = __dirname;
    const filePath = path.join(currentDir, '../testfile.txt'); // Define
    await this.uploadFileInput.setValue(filePath) // Upload the file
    await this.submitButton.click(); // Click the submit button
    await browser.acceptAlert(); // Accept the alert
    await expect(this.successMessage).toBeExisting(); // Verify the success message exists
    await expect(this.successMessage).toHaveText('Success! Your details have been submitted successfully.'); // Verify the success message text
    await this.homeButton.click(); // Click the Home button to return to the homepage
    await expect(browser).toHaveUrl('https://automationexercise.com/'); // Verify the URL to ensure we are back on the homepage
  }
}

export default new ContactUs();