const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 200
  })

  const page = await browser.newPage();

  await page.goto('https://www.google.com/');
  await page.type('input[name=q]', '霧雨魔理沙 リョナ');
  await page.evaluate(() => document.querySelector('input[value^="Google"]').click());
  await page.waitForSelector('img');
  await page.screenshot({ path: 'screenshots/sample1.png' });

  await page.click('#hdtb-msb-vis > div:nth-child(3) > a');
  await page.waitForSelector('img');
  await page.screenshot({ path: 'screenshots/sample2.png' });
})();
