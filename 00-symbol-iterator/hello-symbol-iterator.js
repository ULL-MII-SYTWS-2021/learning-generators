const z = "hello";
const w = Symbol("here is a symbol"); // Symbols can be used as object keys. No two symbols are ever equal.
console.log(w); // Symbol()
const range = {
    from: 4,
    to: 9,
    [w]: "hello",
    [z]: "world!", // See how it works the [] notation inside an object
    [Symbol.iterator]: function () {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last)
                    return { done: false, value: this.current++ }
                else return { done: true, value: undefined }
            }
        }
    }

}

console.log(range.hello); // world!
console.log(range[w]); // range.w does not work!

console.log("nested for ... of loops:")
for (let e of range) {
    process.stdout.write(e+": ")
    range.to = e;
    for (let e2 of range) { // The .last of the outer loop is not changed by the inner loop
        process.stdout.write(e2+" ");
    }
    console.log();
}

console.log("Explicitly:");

let iterator = range[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    process.stdout.write(result.value+" ");
}
console.log();

// Infinite iterators are also possible.
console.log("Infinite iterator:");
range.to = Infinity;
for (const i of range) {
    process.stdout.write(i+" ");
    if (i >= 12) break;
}
console.log(" ...");