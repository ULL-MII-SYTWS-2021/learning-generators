// The yield* directive delegates the execution to another generator. 
// This term means that yield* gen iterates over the generator gen 
// and transparently forwards its yields outside. 
// As if the values were yielded by the outer generator.

function* mygen(first, last) {
    for(let i = first; i <= last; i++) yield i;
}

function* composed() {
    yield* mygen('0'.charCodeAt(0), '9'.charCodeAt(0));
    yield* mygen('A'.charCodeAt(0),'Z'.charCodeAt(0));
    yield* mygen('a'.charCodeAt(0),'z'.charCodeAt(0))
}

let res = [...composed()]
          .map(code => String.fromCharCode(code))
          .join('');
console.log(res);
// 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz

let str = '';

for(let code of composed()) {
  str += String.fromCharCode(code);
}

console.log(str);