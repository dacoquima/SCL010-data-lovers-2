const data = window.RICKANDMORTY.results;

for (let i = 0; i < data.length; i++) {
 
//CARD
card = document.createElement("div");
card.className = "flip-card";

let cardInner = document.createElement("div");
cardInner.className = "flip-card-inner";

let cardFront = document.createElement("div");
cardFront.className = "flip-card-front";

let cardBack = document.createElement("div");
cardBack.className = "flip-card-back";
 
//CONTENT 
let character = document.createElement("h4");
character.textContent = data[i].name;
character.className = "characters";

let image = document.createElement("img");
image.src = data[i].image;
image.className = "images";
 
let image2 = document.createElement("img");
image2.src = data[i].image;
image2.className = "images2";

let number = document.createElement("p");
number.textContent =  "#" + data[i].id;
number.className = "numbers";

let status = document.createElement("h3");
status.textContent = "Status: " + data[i].status;
status.className = "status";

let locationName = document.createElement("h3");
locationName.textContent = "Location: " + data[i].location.name;
locationName.className = "locations";

let specie = document.createElement("h3");
specie.textContent = "Specie: " + data[i].species;
specie.className = "species";

let origin = document.createElement("h3");
origin.textContent = "Origin: " + data[i].origin.name;
origin.className = "origins";

card.appendChild(cardInner);
cardInner.appendChild(cardFront);
cardFront.appendChild(image);
cardFront.appendChild(number);
cardFront.appendChild(character);
cardInner.appendChild(cardBack);
cardBack.appendChild(image2);
cardBack.appendChild(status);
cardBack.appendChild(specie);
cardBack.appendChild(origin);

document.getElementById("container").appendChild(card).innerHTML; 

};

//Filtrar 

let filterHTML = document.getElementById('filterHTML');
filterHTML.addEventListener('change', () => {
let selectFilter = filterHTML.options[filterHTML.selectedIndex].value; 
let resultFilter = window.filter(dataResult, selectFilter);
document.getElementById("container").innerHTML=''; 

for (let i = 0; i < resultFilter.length; i++) {

card = document.createElement("div");
card.className = "flip-card";

let cardInner = document.createElement("div");
cardInner.className = "flip-card-inner";

let cardFront = document.createElement("div");
cardFront.className = "flip-card-front";

let cardBack = document.createElement("div");
cardBack.className = "flip-card-back";
  
let character = document.createElement("h4");
character.textContent = resultFilter[i].name;
character.className = "characters";

let image = document.createElement("img");
image.src = resultFilter[i].image;
image.className = "images";
 
let image2 = document.createElement("img");
image2.src = resultFilter[i].image;
image2.className = "images2";

let number = document.createElement("p");
number.textContent =  "#" + resultFilter[i].id;
number.className = "numbers";

let status = document.createElement("h3");
status.textContent = "Status: " + resultFilter[i].status;
status.className = "status";

let locationName = document.createElement("h3");
locationName.textContent = "Location: " + resultFilter[i].location.name;
locationName.className = "locations";

let specie = document.createElement("h3");
specie.textContent = "Specie: " + resultFilter[i].species;
specie.className = "species";

let origin = document.createElement("h3");
origin.textContent = "Origin: " + resultFilter[i].origin.name;
origin.className = "origins";

card.appendChild(cardInner);
cardInner.appendChild(cardFront);
cardFront.appendChild(image);
cardFront.appendChild(number);
cardFront.appendChild(character);
cardInner.appendChild(cardBack);
cardBack.appendChild(image2);
cardBack.appendChild(status);
cardBack.appendChild(specie);
cardBack.appendChild(origin);

document.getElementById("container").appendChild(card).innerHTML; 
}});


// Order

let orderHTML = document.getElementById('orderHTML');
orderHTML.addEventListener('change', () => {
let selectOrder = orderHTML.options[orderHTML.selectedIndex].value; 
let resultOrder = window.order(dataResult, selectOrder);
document.getElementById("container").innerHTML=''; 

for (let i = 0; i < resultOrder.length; i++) {

card = document.createElement("div");
card.className = "flip-card";

let cardInner = document.createElement("div");
cardInner.className = "flip-card-inner";

let cardFront = document.createElement("div");
cardFront.className = "flip-card-front";

let cardBack = document.createElement("div");
cardBack.className = "flip-card-back";
  
let character = document.createElement("h4");
character.textContent = resultOrder[i].name;
character.className = "characters";

let image = document.createElement("img");
image.src = resultOrder[i].image;
image.className = "images";
 
let image2 = document.createElement("img");
image2.src = resultOrder[i].image;
image2.className = "images2";

let number = document.createElement("p");
number.textContent =  "#" + resultOrder[i].id;
number.className = "numbers";

let status = document.createElement("h3");
status.textContent = "Status: " + resultOrder[i].status;
status.className = "status";

let locationName = document.createElement("h3");
locationName.textContent = "Location: " + resultOrder[i].location.name;
locationName.className = "locations";

let specie = document.createElement("h3");
specie.textContent = "Specie: " + resultOrder[i].species;
specie.className = "species";

let origin = document.createElement("h3");
origin.textContent = "Origin: " + resultOrder[i].origin.name;
origin.className = "origins";

card.appendChild(cardInner);
cardInner.appendChild(cardFront);
cardFront.appendChild(image);
cardFront.appendChild(number);
cardFront.appendChild(character);
cardInner.appendChild(cardBack);
cardBack.appendChild(image2);
cardBack.appendChild(status);
cardBack.appendChild(specie);
cardBack.appendChild(origin);

document.getElementById("container").appendChild(card).innerHTML; 

}});