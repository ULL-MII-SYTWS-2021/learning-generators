// The yield* directive delegates the execution to another generator. 
// This term means that `yield* gen` iterates over the generator `gen` 
// and transparently forwards its yields outside. 
// As if the values were yielded by the outer generator.

function* mygen(first, last) {
  for (let i = first; i <= last; i++) yield i;
}

// Generates all three character combinations of numbers, uppercase letters, and lowercase letters.
function* composed() {
  for(const num of mygen(48, 57)) {
    for (const upper of mygen(65, 90)) {
      for (const lower of mygen(97, 122)) {
        yield [num, upper, lower].map(String.fromCharCode).join("");
    }
    }
  }
}

// get a random code from the composed generator
function randomCode() {
  const codes = [...composed()];
  return codes[Math.floor(Math.random() * codes.length)];
}

console.log(randomCode());