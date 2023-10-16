/*
The first built-in symbol in JavaScript was the Symbol.iterator symbol in ES6. 
An object that has a Symbol.iterator function is considered an iterable. 
That means you can use that object as the right hand side of a for/of loop.
*/

const fibonacci = {
  [Symbol.iterator]: function*() {
    let a = 1;
    let b = 1;
    let temp;

    yield b;

    while (true) {
      temp = a;
      a = a + b;
      b = temp;
      yield b;
    }
  }
};

// Prints every Fibonacci number less than 100
for (const x of fibonacci) {
  if (x >= 100) {
    break;
  }
  console.log(x);
}
