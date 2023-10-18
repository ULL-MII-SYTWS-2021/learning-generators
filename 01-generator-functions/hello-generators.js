#!/usr/bin/env node
function* yes() {
    yield 1;
    yield 2;
    return 3;
}

let g = yes();
console.log(g);
console.log(g.next()); // { value: 1, done: false }
console.log(g.next()); // { value: 2, done: false }
console.log(g.next()); // { value: 3, done: true } Notice `done` is `true` because there are no more yields!
console.log(g.next()); // { value: undefined, done: true }
console.log(g.next()); // { value: undefined, done: true }

g = yes();
for(let e of yes()) {
    console.log(e); // 1 2 but not 3
}