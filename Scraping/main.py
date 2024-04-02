from selenium import webdriver
import csv

driver = webdriver.Chrome()

with open('links.csv') as csv_file:
    csv_reader = csv.reader(csv_file)

    row = next(csv_reader)
    link = row[0]

    print(f"Extracting HTML from: {link}")

    driver.get(link)

    html = driver.page_source

    print(html)



driver.quit()


# Note: There are 3 to 4 section mb_25. This is the first section mb_25 from the webpage
# <div class="section mb_25">
#         <h1>Dua Before Meals</h1>
        
#         <p class="mb_25">Read Dua Before Meals or Khane Se Pehle ki Dua in Urdu is easy now by knowing its meaning. Dua is a prayer you can read on different occasions of life, with translations it's easy to memorize this Dua or supplication. Saying this Dua Before Meals have several virtues.</p>
        

#         <div class="dua_box">
#             <p class="ur_title">کھانے سے پہلے کی دعا </p>
#             <span class="ayat_text">بِسْمِ اللّٰہِ وَعَلٰی بَرَكَةِ اللّٰہِ</span>
#             <p class="ur_text">میں نے الله کے نام کے ساتھ اور الله کی برکت پر کھانا شروع کیا </p>
#             <p class="en_text">In the name of Allah and with the blessings of Allah I begin (eating)</p>
#         </div>
#     </div>


# From this Html, I want you to extract me the info and paste in a csv file called duas.csv with the headings:
1. Dua (English) -> from h1 Tag iside the first section mb_25 tag
2. Dua Note -> from p tag indside the section mb_25 div
3. Dua Urdu -> <p class="ur_title"> from inside the dua_box
4. Dua Arabic -> <span class="ayat_text"> from inside the dua_box
5. Translation Urdu -> <p class="ur_text"> from inside the dua_box
6. Translation English -> <p class="en_text"> from inside the dua_box




# This is the Last section mb_25 from the webpage
<div class="section mb_25">
        
        <h3>
            Benefits of Reading
            Dua Before Meals
            (Khane Se Pehle ki Dua)
        </h3>
        <p>
            Dua is an Arabic word that means to summon or to call out. It is also known as pray, supplication, or invocation. It has great importance in Islam. According to one hadith of Prophet Muhammad (Peace Be Upon Him), dua is the essence of worship. When a person prays to Allah with a true heart, it strengthens his/her belief. The
            Dua Before Meals
            (Khane Se Pehle ki Dua) is also very beneficial.</p>
        <p>
            Dua is among one of the most powerful and effective acts of worship. It gives the feeling of connection with Allah in any place at any time. Muslims call on Allah several times throughout the day and night. Throughout the Holy Quran, Allah encourages people to call on him as he is the only one who can lay our uncertainties, hopes, dreams, and fears. It does not just enhance the feeling of closeness with Allah, but also raises faith and offers relief and hope to believers.
        </p>
        <p>
            There is a dua for almost every act in Islam. The Holy Prophet Muhammad (Peace Be Upon Him) taught the dua to his Ummah for different matters such as safety, family, food, travel, sickness, dressing, etc. However, the
            Dua Before Meals
            (Khane Se Pehle ki Dua) is among the key supplications.
        </p>
        <p>
            Being Muslim we should memorize duas including the
            Dua Before Meals
            (Khane Se Pehle ki Dua). It will not just save us from any harm but will enlighten our lives with different blessings. Here, you can easily read this dua and can share it with your friends and family members. You can also read other supplications on their respective pages.</p>
        
    </div>


from here extract:
7. Benefits -> the complete H3 Tag 
8. Description -> All the p Tags from this last div of section mb_25