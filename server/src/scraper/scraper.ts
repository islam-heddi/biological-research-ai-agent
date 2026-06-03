import { Builder, By, until } from 'selenium-webdriver'
import chrome from 'selenium-webdriver/chrome.js'

async function runScraper() {
    // 1. Configure the browser to run invisibly (headless mode)
//    let options = new chrome.Options();
  //  options.addArguments('--headless=new'); 
    //options.addArguments('--disable-gpu');
    //options.addArguments('--no-sandbox');

    // 2. Initialize the Chrome WebDriver instance
    let driver = await new Builder()
        .forBrowser('chrome')
      //  .setChromeOptions(options)
        .build();

    try {
        // 3. Command the browser to load your target website
        console.log("Navigating to target site...");
        await driver.get('https://https://pubmed.ncbi.nlm.nih.gov/trending/'); // Replace with your target URL

    } catch (error) {
        console.error('An error occurred during extraction:', error);
    } finally {
        // 6. Gracefully terminate the browser process to clear RAM allocations
        await driver.quit();
    }
}

runScraper();
