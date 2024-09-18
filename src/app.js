function updateTime(){

let romeElement = document.querySelector("#rome");
if (romeElement)
    {
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime= moment.tz("Europe/Rome");
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>] A [</small>]");
romeDateElement.innerHTML = moment().format("MMMM Do YYYY");
    }

let honoluluElement = document.querySelector("#honolulu");
if (honoluluElement) 
    {
let honoluluDateElement = honoluluElement.querySelector(".date");
let honoluluTimeElement = honoluluElement.querySelector(".time");
let honoluluTime= moment.tz("Pacific/Honolulu");
honoluluTimeElement.innerHTML = honoluluTime.format("h:mm:ss [<small>] A [</small>]");
honoluluDateElement.innerHTML = moment().format("MMMM Do YYYY");
    }
let currentElement = document.querySelector("#current");
if (currentElement) 
    {
let currentDateElement = currentElement.querySelector(".date");
let currentTimeElement = currentElement.querySelector(".time");
let currentTime= moment();

currentTimeElement.innerHTML = currentTime.format("h:mm:ss:SS [<small>] A [</small>]");
currentDateElement.innerHTML = moment().format("MMMM Do YYYY");
    }
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    
    

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `

    <div class="city"> 
                  <h1>${cityName}</h1>
                    <div class="date">${cityTime.format("MMMM Do YYYY" )}</div>
                    <div class="time">${cityTime.format("h:mm" )}<small>${cityTime.format( "A" )}</small></div>
     </div>`;
    
     let backgroundImgElement = document.querySelector("#backgroundImg");
    backgroundImgElement.innerHTML = Image="src/img/`${cityName}`.png";
}


updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);


