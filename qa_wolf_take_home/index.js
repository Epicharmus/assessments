// EDIT THIS FILE TO COMPLETE ASSIGNMENT QUESTION 1
const { chromium } = require("playwright");

async function sortHackerNewsArticles() {
  // launch browser
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // go to Hacker News
  await page.goto("https://news.ycombinator.com/newest");

  // load articles
  await page.waitForSelector('.athing');

      /* find ids
    for i=0, i <100, i++ */
    const rows = page.getByRole('tr');
    const articleIds =[];
    const uploadTimes =[];
    for (var i=0; i<100; i++){
      artId=(rows.nth(i).locator("//*[@class='.athing']").getAttribute('id'))
      articleIds.push(artId[0]);
    };
    /*const uploadTimes = [for each id, upload time];
    /* access uploadTimes
    for article in articles {
      access upload time
      push to uploadTimes
} */
    for (id in articleIds){
      uploadTimes.push(toString("https://hacker-news.firebaseio.com/v0/item/"<id[0]>"/time"))
    };
    console.log(rows.nth(1).locator("//*[@class='.athing']").getAttribute('id'));
    console.log(uploadTimes);
    return (console.log("Test done."))
    /* https://hacker-news.firebaseio.com/v0/item/<id>/time.json
        
    check sorting of uploadTimes 
    return false if out of order
    await page.getByRole('td', { class : "athing submission"})*/

}

(async () => {
  await sortHackerNewsArticles();
})();
