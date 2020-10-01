//"use strict";
let d1 = new Date(2020, 9, 30, 3, 12);
console.log(d1);
let d2 = new Date("September 30, 2020 03:12:00");
console.log(d2);
function getWeekDay(date) {
    let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
  
    return days[date.getDay()];
  }
  
  let date = new Date(2020, 8, 30); // 3 Jan 2014
  console.log( getWeekDay(date) );
  function getLocalDay(date) {

    let day = date.getDay();
  
    if (day == 0) { // weekday 0 (sunday) is 7 in european
      day = 7;
    }
  
    return day;
  }
  function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
  }
  function getSecondsToday() {
    let now = new Date();
  
    // create an object using the current day/month/year
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
    let diff = now - today; // ms difference
    return Math.round(diff / 1000); // make seconds
  }
  
  alert( getSecondsToday() );