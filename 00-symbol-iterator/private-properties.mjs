/*
Since no two symbols are ever equal, 
symbols are a convenient way to simulate private properties in JavaScript. 

Symbols don't show up in Object.keys(), and therefore, 
unless you explicitly export a symbol, 
no other code can access that property 
unless you explicitly go through the `Object.getOwnPropertySymbols()` 
function.
*/

function getObj() {
  const symbol = Symbol('test');
  const obj = {};
  obj[symbol] = 'test';
  return obj;
}

const obj = getObj();

console.log(Object.keys(obj)); // []

// Unless you explicitly have a reference to the symbol, you can't access the
// symbol property.
console.log(obj[Symbol('test')]); // undefined

// You can still get a reference to the symbol using `getOwnPropertySymbols()`
const properties = Object.getOwnPropertySymbols(obj);
console.log(properties); // [ Symbol(test) ]
let symbol = properties[0];
console.log(obj[symbol]); // 'test'