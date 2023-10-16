function* yes() {
    yield 1;
    yield 2;
    return 3;
}

let g = yes();
console.log(g);
/*
Note: the example below shows 1, then 2, and it doesn’t show 3!
It’s because for..of iteration ignores the last value, when done: true.
*/
for(let x of g) {
    console.log(x);
}