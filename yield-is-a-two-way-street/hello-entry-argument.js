function* generator() {
    let a = yield 1;
    console.log('Inside generator: '+a); // hello
    let b = yield (a+" world!");
    console.log('Inside generator: '+b); // 10
    yield b*2;
}

let g = generator();
console.log(g.next().value); // 1
console.log(g.next("hello").value); // hello world!
console.log(g.next(10).value); // 20