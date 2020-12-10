function* yes() {
    yield 1;
    yield 2;
    return 3;
}

let g = yes();
console.log(g);
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());