let romeElement = document.querySelector("#rome");

let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime= moment();
romeDateElement.innerHTML = moment().format('MMMM Do YYYY');
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
