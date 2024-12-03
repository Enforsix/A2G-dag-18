// General examples of the use of arrays:

// Flat Array:
const fruitBowl = [" Apple", " Pear", " Grapes"];


//Array methods: 
//push legger til en ny enhet.
fruitBowl.push(" Banana");
fruitBowl.push(" Orange");

//pop fjerner siste tillakte enhet.
fruitBowl.pop();
fruitBowl.toString();

console.log(fruitBowl);
console.log(fruitBowl.toString());


//New Array
const waponCrate = ["Sword", "Dagger", "Bow" ];
waponCrate.push("Wand");
waponCrate.push("2h-Sword");
waponCrate.push("Mace");
waponCrate.pop();
waponCrate.toString();

console.log(waponCrate);
console.log(waponCrate.toString());


//New Array 2
const Armor = ["Head", "Chest", "Shoulders", "Legs"];

Armor.push("Glovs");
Armor.push("Boots");
Armor.push("Rings");
Armor.pop();
Armor.toString();

//shift (fjerner den første enheten), unshift (legger til en enhet frenst)
Armor.unshift("Neck");
Armor.unshift("Trincket");
Armor.shift();

console.log(Armor);
console.log(Armor.toString());

//
console.log("________________________________");
//


// hente inn elementer / select element
const inputField  = document.querySelector("#inputField");
const addFront = document.querySelector("#addFront");
const removeFront = document.querySelector("#removeFront");
const addBack = document.querySelector("#addBack");
const removeBack = document.querySelector("#removeBack");

console.log(inputField, addFront, removeFront, addBack, removeBack);

const outputArray = [];

// gi element hendelse
//  legg til, fjern front
addFront.addEventListener("click", function () {
  console.log("addFront Button clicked!");
  outputArray.unshift(inputField.value);
  
  console.log(outputArray);

  outputField.textContent = outputArray  
});

removeFront.addEventListener("click", function () {
  console.log("removeFront Button clicked!");
  outputArray.shift();
  
  console.log(removeFront);

  outputField.textContent = outputArray  
});

// leg til bak, fjern bak
addBack.addEventListener("click", function () {
  console.log("addBack Button clicked!");
  outputArray.push(inputField.value);
  
  console.log(addBack);

  outputField.textContent = outputArray  
});

removeBack.addEventListener("click", function () {
  console.log("removeBack Button clicked!");
  outputArray.pop();
  
  console.log(removeBack);

  outputField.textContent = outputArray  
});







/*
// Object with Arrays:
const biggerFruitBowl = {
  fruit: ["Apple", "Pear", "Grapes"],
  berries: ["Banana", "Strawberry"],
};

// Nested Arrays in Objects
const evenBiggerFruitBowl = {
  fruit: [
    { apple: ["Red apple", "Green Apple", "Yellow Apples"] },
    "Pear","Grapes",],
  berries: ["Banana", "Strawberry"],
};
*/




