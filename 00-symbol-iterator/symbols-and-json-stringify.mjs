/*
Symbols are also convenient for private properties because 
they do not show up in JSON.stringify() output. 
Specifically, JSON.stringify() silently ignores symbol keys and values.
*/
const symbol = Symbol('test');
const obj = { [symbol]: 'test', test: symbol };

console.log(JSON.stringify(obj)); // "{}"