const z = "hello";
const w = Symbol(); // Symbols can be used as object keys. No two symbols are ever equal.
console.log(w); // Symbol()
const range = {
    from: 4,
    to: 10,
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

console.log("for ... of ...")
for (let e of range) {
    for (let e2 of range) {
        console.log(e, e2);
    }
}

console.log("Explicitly:");

let iterator = range[Symbol.iterator]();

while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}

// Infinite iterators are also possible.
range.to = Infinity;
for (const i of range) {
    console.log(i);
    if (i >= 12) break;
}