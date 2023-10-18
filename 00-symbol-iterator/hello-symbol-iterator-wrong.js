let range = {
    from: 1,
    to: 5,

    [Symbol.iterator]() {
        this.current = this.from;
        return this;
    },

    next() {
        if (this.current <= this.to) {
            return { done: false, value: this.current++ };
        } else {
            return { done: true };
        }
    }
};

for (let num of range) {
    for (let num2 of range) {
      console.log(num, num2); 
      /*
        1 1
        1 2
        1 3
        1 4
        1 5 
       */
    }
}