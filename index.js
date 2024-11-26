var cats = ["Milo", "Otis", "Garfield"];
// Destructive Methods
function destructivelyAppendCat(name) {
  cats.push(name);
}

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

function destructivelyRemoveLastCat() {
  cats.pop();
}

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Non-destructive Methods
function appendCat(name) {
  return [...cats, name]; // Creates a new array with the cat appended
}

function prependCat(name) {
  return [name, ...cats]; // Creates a new array with the cat prepended
}

function removeLastCat() {
  return cats.slice(0, -1); // Returns a new array with the last cat removed
}

function removeFirstCat() {
  return cats.slice(1); // Returns a new array with the first cat removed
}

// Export the functions to make them accessible for testing
module.exports = {
  cats,
  destructivelyAppendCat,
  destructivelyPrependCat,
  destructivelyRemoveLastCat,
  destructivelyRemoveFirstCat,
  appendCat,
  prependCat,
  removeLastCat,
  removeFirstCat
};




