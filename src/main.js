import { PlaywrightCrawler } from 'crawlee';

const crawler = new PlaywrightCrawler({
    requestHandler: async ({ page, request, enqueueLinks }) => {
        console.log(`Processing: ${request.url}`);
        
        await page.locator('//html/body/header/div/div[1]/form/div[1]/label/input').fill("Restaurants")
        await page.waitForTimeout(2000);
        await page.keyboard.press('Tab');
        await page.waitForTimeout(2000);
        await page.locator('//html/body/header/div/div[1]/form/div[2]/label/input').fill('Boston');
        await page.waitForTimeout(2000);
        await page.keyboard.press('ArrowDown');
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'screenshot1.png' });
        await page.locator('//html/body/header/div/div[1]/form/button').click();
        await page.waitForTimeout(2000);
        await page.screenshot({ path: 'screenshot2.png' });
        await page.waitForTimeout(2000);
    },
    maxRequestsPerCrawl: 50,
    headless: false
});

// Replace with the starting URL of your target site
await crawler.run(['https://www.yellowpages.com/']);
