/*
The Symbol() function takes a single parameter, the string description. 
The symbol's description is only for debugging purposes - the description shows up in the symbol's toString(). 
However, two symbols with the same description are not equal.
*/

const symbol1 = Symbol('my symbol');
const symbol2 = Symbol('my symbol');

console.log(symbol1 === symbol2); // false
console.log(symbol1); // 'Symbol(my symbol)'
console.log(symbol2); // 'Symbol(my symbol)'