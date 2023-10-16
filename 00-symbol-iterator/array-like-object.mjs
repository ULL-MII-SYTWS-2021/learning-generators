let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
};

// Error (no Symbol.iterator)
try {
    for (let item of arrayLike) { }
} catch (e) { console.log("You can't use for/of on an array-like object"); }

// Syntax: Array.from(obj[, mapFn, thisArg])
let arr = Array.from(arrayLike, x => x.toUpperCase());
console.log(arr.pop()); // World (method works)