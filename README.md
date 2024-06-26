# Masnoon Duas Website

A website to display popular Islamic supplications for easy access.

## Getting Started

To run the project locally:

```
# Clone the repo
git clone https://github.com/your-username/masnoon-duas.git

# Install dependencies
npm install

# Start development server 
npm start
```

The app will be running at <http://localhost:3000>.

## Built With

- [React](https://reactjs.org/) - Frontend framework
- [Puppeteer](https://github.com/puppeteer/puppeteer) - For web scraping
- [Node.js](https://nodejs.org/) - Backend runtime environment

## Scraper

The scraper uses Puppeteer to dynamically extract duas data:

```js
// scraper.js

const puppeteer = require('puppeteer');

async function scrape() {

  // Launch puppeteer
  const browser = await puppeteer.launch();

  // Scrape target page  
  const page = await browser.newPage();
  await page.goto('https://website.com');

  // Extract fields 
  let title = await page.evaluate(/*...*/);

  // Save data
  // ...

  await browser.close();
}
```

## Website

A basic React app displays the scraped duas:

```jsx
// App.js

function App() {
  return (
    <div>
      <Header />

      <Main >
        {duas.map(dua => (
          <DuaItem 
            key={dua.id}
            title={dua.title} 
            // etc
          />
        ))}  
      </Main>
    </div>
  );
}
```

Let me know if any part needs more explanation!
