function* generator(z) {
    console.log(z); // 999
    z++;
    let a = yield z+1;
    console.log('Inside generator: '+a); // a is hello
    let b = yield (a+" world!");
    console.log('Inside generator: '+b); // b is 10
    yield b*2;
}

let g = generator(999);
console.log(g.next().value); // 1001
console.log(g.next("hello", "second ignored parameter").value); // hello world!
console.log(g.next(10).value); // 20