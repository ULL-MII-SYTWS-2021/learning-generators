let arrayLike = { // has indexes and length => array-like
    0: "Hello",
    1: "World",
    length: 2
  };
  
// Error (no Symbol.iterator)
// for (let item of arrayLike) {}

let arr = Array.from(arrayLike); // (*)
console.log(arr.pop()); // World (method works)