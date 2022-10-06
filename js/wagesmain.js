//TASK 1: GET THE COMPREHENSIVE DATE INFO
var date = new Date();

//TASK 2: USE date TO COMPUTE TIME INFORMATION
var min = date.getMinutes();
var hrs = date.getHours();
var ampm = hrs < 12 ? "am" : "pm";

if(hrs > 12) {
    hrs -= 12;
}
if(min < 10) {
    min = "0" + min;
}

// document.write ("<br>The time is ", hrs, ":", min, ampm);

//TASK 3: USE date TO COMPUTE DATE, WEEKDAY, 
var weekday;
switch(weekday) {
    case 0: dayText = "Sunday"; break;
    case 1: dayText = "Monday"; break;
    case 2: dayText = "Tuesday"; break;
    case 3: dayText = "Wednesday"; break;
    case 4: dayText = "Thursday"; break;
    case 5: dayText = "Friday"; break;
    case 6: dayText = "Saturday"; break;
}

var monthText;
switch(month) {
    case 0: monthText = "January"; break;
    case 1: monthText = "February"; break;
    case 2: monthText = "March"; break;
    case 3: monthText = "April"; break;
    case 4: monthText = "May"; break;
    case 5: monthText = "June"; break;
    case 6: monthText = "July"; break;
    case 7: monthText = "August"; break;
    case 8: monthText = "September"; break;
    case 9: monthText = "October"; break;
    case 10: monthText = "November"; break;
    case 11: monthText = "December"; break;
}

document.write("TEST");
// document.write ("<br>The year is ", date.getFullYear());
// document.write ("<br>It is", dayText, ": Day ", day, " of ", monthText, " in the year ", date.getFullYear());
// document.write ("<br>The time is ", hrs, ":", min, ampm);