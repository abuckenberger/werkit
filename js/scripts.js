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
    maxRecords: 100,
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.

    records.forEach(function(record) {
//        console.log(record.fields.Name);
//        console.log(record.fields.Type);
//        console.log(record.fields.Time);
//        console.log(record.fields.Workout);
//        console.log(record.fields.Complete);
      console.log( record.fields["Complete"] );
        
        
        
var status_message;
    
    var status; 
    
    
    
    if (record.fields["Complete"]  === true) {
    status = 'positive'; 
    status_message = '<i class="icon checkmark"></i> WAY TO GO! ';
    
    } else {
        
        status_message = `<i class="icon close"></i> Get to it! `;
    } 
            
            //template literal
var template = ` 
  <div class="card"><div class="name"><h1>${record.fields.Name}</h1></div>
    <div class="type"><h2>(${record.fields.Type})</h2>
<div class="time"><h3>(${record.fields.Time})</h3>
    <div class="workout"><p>${record.fields.Workout}</p>
<div class="ui checkbox"><input type="checkbox" name="example">
  <label>${status_message}</label></div>
    


      
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



//TIMER

let countdown;
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  // clear any existing timers
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    // check if we should stop it!
    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    // display it
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  console.log(mins);
  timer(mins * 60);
  this.reset();
});

        

        







////img section
//<div class="image">
//<img src=" ${record.fields.Image[0].url} " alt="" value="PLAY"  onclick="play()></div>