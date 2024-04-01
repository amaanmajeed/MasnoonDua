const puppeteer = require('puppeteer');
const fs = require('fs');
const { log } = require('console');

async function scrape() {

  
  const links = fs.readFileSync('links.csv').toString().split('\n');
  // await page.goto('https://hamariweb.com/islam/safar_aur_sawari_ki_dua_md58.aspx');

  const csvFile = fs.createWriteStream('duas.csv');
  const headers = [
    'serialNumber',
    'Title English',
    'Title Urdu', 
    'Arabic',
    'Urdu',
    'English',
    'Benefits',
    'Description'
  ]

  let csvData = headers.join(",") + "\n";

  console.log("Headers");
  let serialNum = 1;
  
  for (let link of links) {
    const browser = await puppeteer.launch();
    console.log(link);
    
    const page = await browser.newPage();
    await page.goto(link);
    
    await page.waitForSelector('.dua_box');
    console.log("inside");
    
  let titleEnglish;
  try {
      titleEnglish = await page.evaluate(() => {
      return document.querySelector('.section.mb_25 h1').outerHTML;
    });
  } catch (e) {
    console.log('Dua Title not found');
    }
  

    let titleUrdu;
  try {
      titleUrdu = await page.evaluate(() => {
      return document.querySelector('.ur_title').textContent;
    });
  } catch (e) {
    console.log('Dua Title not found');
    }
  

  let duaArabic;
  try {
    duaArabic = await page.evaluate(() => {
      return document.querySelector('.ayat_text').textContent;
    });
  } catch (e) {
    console.log('Arabic dua not found');
  }

  let duaUrdu;
  try {
    duaUrdu = await page.evaluate(() => {
      return document.querySelector('.ur_text').textContent;
    });  
  } catch (e) {
    console.log('Urdu dua not found');
    }
    
    let duaEnglish;
  try {
    duaEnglish = await page.evaluate(() => {
      return document.querySelector('.en_text').textContent;
    });
  } catch (e) {
    console.log('English dua not found');
  }

  let benefits = await page.evaluate(() => {
  // Get the outerHTML of the h3 tag
  return document.querySelector('.section.mb_25 h3').outerHTML;
});

// let description = await page.evaluate(() => {
//   // Get all p tags and join their text
//   let paragraphs = document.querySelectorAll('.section.mb_25 p');
//   return [...paragraphs].map(p => p.textContent).join(' ');
  // });
  
  let description = await page.evaluate(() => {
  
  // Get last div
  let lastSection = document.querySelectorAll('.section.mb_25')[document.querySelectorAll('.section.mb_25').length-1];

  // Get p tags from last div
  let paragraphs = lastSection.querySelectorAll('p');  

  return [...paragraphs].map(p => p.textContent).join(' ');

});

  
  // Remove tags from title
titleEnglish = titleEnglish.replace(/<(.*?)>/g, ''); 

// Remove tags from benefits heading
  benefits = benefits.replace(/<(.*?)>/g, '')
    .replace(/\n/g, ' ').trim().replace(/\s+/g, ' ');
  
  

  // Remove tags and whitespace from description 
  description = description
  .replace(/^\n/gm, '')
  .replace(/ +/g, ' ')
    // .replace(/\n\s\n\s/g, '\n')
  .replace(/\n\s*\(/g, '(');
  // .replace(/\n{2,}/g, '\n');
  // .trim();
  // .replace(/\s+/g, ' ');
  
  
  console.log("Title English: ", JSON.stringify(titleEnglish));
  console.log();
  console.log("Title Urdu: ", JSON.stringify(titleUrdu));
  console.log();
  
  console.log("Arabic: ", JSON.stringify(duaArabic)); 
  console.log();

  console.log("Urdu: ", JSON.stringify(duaUrdu));
  console.log(); 
  
  console.log("English: ", JSON.stringify(duaEnglish));
  console.log();

  console.log("Benefits: ", JSON.stringify(benefits));
  console.log();

  console.log("Description: ", JSON.stringify(description));


  
  const data = {
    titleEnglish,
    titleUrdu,
    duaArabic,
    duaUrdu,
    duaEnglish,
    benefits,
    description,
  };
  
  // const csvData = headers.join() + "\n" + JSON.stringify(data);

  // let csvData = headers.join(",") + "\n";

  csvData += `${serialNum},`; 
    
  Object.values(data).forEach(field => {
    csvData += `"${field}",`
  })
    
    serialNum++;

    csvData = csvData.slice(0, -1);
    

  // fs.writeFileSync('./duas.csv', csvData);
    // fs.writeFileSync(`${link}.csv`, data);
    
    csvData += Object.values(data).map(field => `"${field}",`).join("") + "\n";
    csvFile.write(csvData);
    csvData = ""; // reset for next link

  await browser.close();
}
  // fs.writeFileSync('duas.csv', csvData); 
  csvFile.end();

}

scrape();