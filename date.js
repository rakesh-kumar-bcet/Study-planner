const d = new Date();

var hr = d.getHours();

var year = d.getFullYear();

var m = d.getMonth();
const months = [
  { name: "January", days: 31 },
  { name: "February", days: 29 }, 
  { name: "March", days: 31 },
  { name: "April", days: 30 },
  { name: "May", days: 31 },
  { name: "June", days: 30 },
  { name: "July", days: 31 },
  { name: "August", days: 31 },
  { name: "September", days: 30 },
  { name: "October", days: 31 },
  { name: "November", days: 30 },
  { name: "December", days: 31 },
];
var month = months[m]["name"];
document.getElementById("month").innerHTML = `${month}`;

var dt = d.getDate();
var date = dt > 9 ? `${dt}` : `0${dt}`;
document.getElementById("dayleftformonthend").innerHTML = months[m]["days"]-dt;


var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var day = days[d.getDay()];
document.getElementById("date").innerHTML = `${date}, ${month}, ${year} : ${day}`;

const examDate = new Date("2023-05-5");
daysLeft = Math.ceil((examDate.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
document.getElementById("dayleftforexam").innerHTML = daysLeft > 0 ? daysLeft : 366 + daysLeft;

var dateList = {
  yr : year,
  mth : month,
  dat : dt,
  dayToday : day,
  hours : hr,
};
