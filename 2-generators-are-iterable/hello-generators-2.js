function* yes() {
    yield 1;
    yield 2;
    return 3;
}

let g = yes();
console.log(g);
for(let x of g) {
    console.log(x);
}