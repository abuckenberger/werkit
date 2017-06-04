// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

console.log('Hello, World!');

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyqGtSAOwpL9x1Tx'
});
var base = Airtable.base('appIp0fTdvnv7W5Bz');
console.log(base)

// Get Records
base('Cam').select({
      maxRecords: 19,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {

    records.forEach(function(record) {
       
      // Check-Check 
    console.log(record.fields.Image[0].url);
    console.log(record.fields.Name);
    console.log(record.fields.Quote[0].url)
        

        
        //template literal
var template = ` <section class="ui fluid card">
            <div class="name"><h1>${record.fields.Name}</h1></div>
            
            

            <div class="sound"><audio controls src=" ${record.fields.Quote[0].url} ">hello</audio>
            
            </div>
            
         
        </section>`

function play(){
       var audio = document.getElementById("audio");
       audio.play();
                 }

      // Display Data
      $('#students').append(template);
     

    });
});





////img section
//<div class="image">
//<img src=" ${record.fields.Image[0].url} " alt="" value="PLAY"  onclick="play()></div>