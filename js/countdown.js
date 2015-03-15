// set the date we're counting down to
//var target_date = new Date('Mar, 1, 2015').getTime();
var race_date = new Date('Apr, 17, 2015 20:35:00')

var target_date = race_date.getTime(); 
// variables for time units
var days, hours, minutes, seconds;
 
// get tag element
var cdcountdown = document.getElementById('cd-countdown');
var cdcountdown2 = document.getElementById('cd-countdown2');
cdcountdown2.innerHTML = race_date.toDateString();

//function to update the countdown timer
function updateClock() {
	var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;
 
    // do some time calculations
    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);
     
    // format countdown string + set tag value
    cdcountdown.innerHTML = '<span class="cd-number">' + days +  '</span><span class="cd-text"> Days,</span> <span class="cd-number">' + hours + '</span><span class="cd-text"> Hours &amp;</span> <span class="cd-number">'
    + seconds + '</span><span class="cd-text"> Minutes</span> ';  
}

//run it once to set up the page
updateClock();
// update the tag with id "countdown" every 60 seconds
setInterval(function () { updateClock() }, 60000);