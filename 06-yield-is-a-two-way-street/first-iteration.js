function* gen() {
  returnedFromYield = yield 'foo'; 
  yield returnedFromYield; 
}

let g = gen();

console.log(g.next(1)); 
console.log(g.next(2)); 