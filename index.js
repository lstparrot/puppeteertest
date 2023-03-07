const puppeteer = require('puppeteer');

(async () =>{
    const browser = await puppeteer.launch({
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
    });
    const page = await browser.newPage();
    await page.goto('https://github.com');
    


})