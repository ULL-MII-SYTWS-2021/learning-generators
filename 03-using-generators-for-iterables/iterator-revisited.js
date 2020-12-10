let range = {
    from: 2,
    to: 10,
    *[Symbol.iterator]() {
        for(let val = this.from; val <= this.to; val++) {
            yield val;
        }
    }
}

console.log(range[Symbol.iterator]);
console.log(...range)