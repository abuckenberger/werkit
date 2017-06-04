// @codekit-prepend "jquery.js";
// @codekit-prepend "semantic.js";
// @codekit-prepend "airtable.js";

console.log('Hello, World!');

var Airtable = require('airtable');
Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: 'keyqGtSAOwpL9x1Tx'
});
var base = Airtable.base('appKZOc0KOB8mkat3');

// Get Records
base('werkit').select({
    // Selecting the first 3 records in Grid view:
    maxRecords: 16,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
//        console.log(record.fields.Name);
//        console.log(record.fields.Type);
//        console.log(record.fields.Time);
//        console.log(record.fields.Workout);
//        console.log(record.fields.Complete);
        
            
            //template literal
var template = ` 
  <div class="card"><div class="name"><h1>${record.fields.Name}</h1></div>
    <div class="type"><h2>(${record.fields.Type})</h2>
<div class="time"><h3>(${record.fields.Time})</h3>
    <div class="workout"><p>${record.fields.Workout}</p>
    


      
    </div>
  </div>
`


$('main').append(template);
        
        
    });
    
    

    
    
    
    

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();

}, function done(err) {
    if (err) { console.error(err); return; }
});
        

        







////img section
//<div class="image">
//<img src=" ${record.fields.Image[0].url} " alt="" value="PLAY"  onclick="play()></div>