function updateTime(){

let romeElement = document.querySelector("#rome");

let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime= moment.tz("Europe/Rome");
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
romeDateElement.innerHTML = moment().format("MMMM Do YYYY");

let honoluluElement = document.querySelector("#honolulu");

let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTime= moment.tz("Pacific/Honolulu");
honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss [<small>]A[</small>]");
honoluluDateElement.innerHTML = moment().format("MMMM Do YYYY");

let currentElement = document.querySelector("#current");
let currentDateElement = currentElement.querySelector(".date");
let currentTimeElement = currentElement.querySelector(".time");
let currentTime= moment();

currentTimeElement.innerHTML = currentTime.format("h:mm:ss SS [<small>]A[</small>]");
currentDateElement.innerHTML = moment().format("MMMM Do YYYY");
}

updateTime();
setInterval(updateTime, 1000);

