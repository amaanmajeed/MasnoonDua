# Dua Scraping Project

This project scrapes dua (prayers) data from various Islamic websites and saves it to CSV files.

## Setup

Clone the repo and run `npm install` to install dependencies:

```
git clone https://github.com/your-user/dua-scraper.git
cd dua-scraper
npm install
```

### Requirements

- Node.js
- Puppeteer for headless Chrome automation

## Scraping

The scraping logic is defined in `scrape.js`. It uses Puppeteer to automate Chrome and scrape the targeted sites.

### Links File

The URLs to scrape are stored in `links.csv`, one per line.

```
https://site1.com/dua1
https://site1.com/dua2
https://site2.com/dua3
```

### Scrape Function

The `scrape()` function launches Puppeteer, scrapes each link, extracts the data, and saves to CSV.

```js
async function scrape() {

  // Open CSV file stream 
  const csvFile = fs.createWriteStream('output.csv');

  for(link of links) {
  
    // Launch browser and page
    const browser = await puppeteer.launch();  
    const page = await browser.newPage();

    // Go to page and scrape data
    await page.goto(link);
    let title = await page.evaluate(/*...*/);

    // Write row to CSV
    csvFile.write(row);

  }

  // Close browser and file
  await browser.close();
  csvFile.end();

}
```

### Data Extraction

Use Puppeteer's page evaluation to query elements and extract text.

```js
let title = await page.evaluate(() => {
  return document.querySelector('h1').innerText;
});
```

## Running

To execute the scraping:

```
node scrape.js
```

The output will be written to `output.csv`.

Let me know if any part needs more explanation or code samples!
