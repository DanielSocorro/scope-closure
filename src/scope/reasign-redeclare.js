var firstName; // Declaring without assigning is Undefined
firstName = 'Dan'; // assigning
console.log(firstName);

var lastName = 'Socorro'; // declaring | assigning
lastName = 'Castellano'; // re-assigning
console.log(lastName);

var secondName = 'Alberto';  // declaring | assigning
var secondName = 'Daniel'; // re-declaring & re-assigning
console.log(secondName);

//let 

let fruit = 'Apple'; // declaring | assigning
fruit = 'Kiwi'; // re-asigning
console.log(fruit);

let fruit = 'Banana'; // Cannot redeclare block-scoped variable 'fruit'.

// const

const animal = 'dog'; // declaring | assigning
animal = 'cat';  // re-asigning
console.log(animal);/*  TypeError: Assignment to constant variable. */
const animal = 'cat'; // Cannot redeclare block-scoped variable 'animal'

const cars = [];
cars.push("🚗");