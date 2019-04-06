const puppeteer = require('puppeteer');

let hitmakerUrl = 'https://hitmarkerjobs.com/jobs?sectorQ=web-development';
(async () => {
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1920,
        height: 926
    });
    await page.goto(hitmakerUrl);
    // await page.click('#loadMore > div:nth-child(1) > div > div > a');
    await page.waitFor(1000);

    // get hotel details
    let webdevelopmentData = await page.evaluate(() => {
        let jobs = [];
        // get the hotel elements

        let jobsElms = document.querySelectorAll('body > main > div > div');
        // get the hotel data
        jobsElms.forEach((jobelement) => {
            let jobJson = {};
            try {
                jobJson.position = jobelement.querySelector('#loadMore > div:nth-child(1) > div > div > a').innerText;



            } catch (exception) {

            }
            jobs.push(jobJson);
        });
        return jobs;
    });

    console.dir(webdevelopmentData);
})();