

// global Scope

var fruit = "Apple"; //global
console.log(fruit);

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
    country = 'Colombia'; // error, var defined as Global
    console.log(country)
}

countries();
console.log(country);