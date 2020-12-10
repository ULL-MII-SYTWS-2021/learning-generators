const z = "hello";
const range = {
    from: 4,
    to: 10,
    [z]: "world!", // See how it works the [] notation inside an object
    [Symbol.iterator]: function() {
        return {
            current: this.from,
            last: this.to,
            next() {
                if (this.current <= this.last) 
                  return { done: false, value: this.current++}
                else return { done: true, value: undefined }
            }
        }
    }
    
}

console.log(range.hello)

for (let e of range) {
    console.log(e);
}
