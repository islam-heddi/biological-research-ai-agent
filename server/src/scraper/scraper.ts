import puppeteer from 'puppeteer';

async function scrapeWebsite() {
  // 1. Launch a headless browser instance
  const browser = await puppeteer.launch({ headless: true });
  
  // 2. Open a new browser tab
  const page = await browser.newPage();
  
  try {
    // 3. Navigate to your target website
    await page.goto('https://example.com', { waitUntil: 'domcontentloaded' });
    
    // 4. Wait for a specific CSS element selector to load completely
    await page.waitForSelector('h1');
    
    // 5. Evaluate the page DOM to extract text data
    const pageData = await page.evaluate(() => {
      const heading = document.querySelector('h1')?.innerText;
      const paragraphs = Array.from(document.querySelectorAll('p')).map(p => p.innerText);
      
      return { heading, paragraphs };
    });
    
    console.log('Scraped Data:', pageData);
  } catch (error) {
    console.error('Error during scraping execution:', error);
  } finally {
    // 6. Ensure the browser closes to prevent memory leaks
    await browser.close();
  }
}

scrapeWebsite();
