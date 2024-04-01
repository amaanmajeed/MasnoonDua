const puppeteer = require('puppeteer');
const fs = require('fs');

async function scrape() {

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://hamariweb.com/islam/safar_aur_sawari_ki_dua_md58.aspx');

  await page.waitForSelector('.dua_box');


  
  const headers = [
    'Title English',
    'Title Urdu', 
    'Arabic',
    'Urdu',
    'English',
    'Benefits',
    'Description'
  ]
  
  

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
    .replace(/\n/g, ' ').trim();
  
  

// Remove tags and whitespace from description 
description = description.replace(/<(.*?)>/g, '')
                          .replace(/\n/g, ' ')
                          .replace(/\s+/g, ' ');

  
  

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
  
  const csvData = headers.join() + "\n" + JSON.stringify(data);
  fs.writeFileSync('./duas.csv', csvData);
  await browser.close();

}

scrape();