
const data = window.RICKANDMORTY.results;

for (let i = 487; i < data.length; i++) {

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
let select = filterHTML.options[filterHTML.selectedIndex].value; 
let result = window.filter(dataResult, select);
document.getElementById("container").innerHTML=''; 

for (let i = 0; i < result.length; i++) {

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
character.textContent = result[i].name;
character.className = "characters";

let image = document.createElement("img");
image.src = result[i].image;
image.className = "images";
 
let image2 = document.createElement("img");
image2.src = result[i].image;
image2.className = "images2";

let number = document.createElement("p");
number.textContent =  "#" + result[i].id;
number.className = "numbers";

let status = document.createElement("h3");
status.textContent = "Status: " + result[i].status;
status.className = "status";

let locationName = document.createElement("h3");
locationName.textContent = "Location: " + result[i].location.name;
locationName.className = "locations";

let specie = document.createElement("h3");
specie.textContent = "Specie: " + result[i].species;
specie.className = "species";

let origin = document.createElement("h3");
origin.textContent = "Origin: " + result[i].origin.name;
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