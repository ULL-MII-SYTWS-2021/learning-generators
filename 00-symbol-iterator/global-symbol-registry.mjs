/*
There is also a global symbol registry. 
Creating a symbol using Symbol.for() adds a symbol to a global registry, keyed by the symbol's description. 
In other words, if you create two symbols with the same description using Symbol.for(), the two symbols will be equal.
*/

const symbol1 = Symbol.for('test');
const symbol2 = Symbol.for('test');

console.log(symbol1 === symbol2); // true
console.log(symbol1); // 'Symbol(test)'

/*
Generally speaking, you shouldn't use the global symbol registry 
unless you have a very good reason to, 
because you might run into naming collisions.
*/