const range = {
    from: 4,
    to: 10
}

range[Symbol.iterator] = function() {
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

for (let e of range) {
    console.log(e);
}
