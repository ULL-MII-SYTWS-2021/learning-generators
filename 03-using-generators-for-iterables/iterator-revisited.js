// Here is a version of the example in 00-symbol-iterator/hello-symbol-iterator.js that 
// uses a generator function to define the iterator 
let range = {
    from: 2,
    to: 10,
    *[Symbol.iterator]() { // // a shorthand for [Symbol.iterator]: function*()
        for(let val = this.from; val <= this.to; val++) {
            yield val;
        }
    }
}

console.log(range[Symbol.iterator]);
for(let r of range) {
  process.stdout.write(r+" ");
}
console.log("\nSpread: ",...range)