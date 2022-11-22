function* gen() {
  // On the first iteration, yield does not return anything.
  //because it returns something ONLY when execution is resumed
  returnedFromYield = yield 'foo'; 
  yield returnedFromYield; 
}

let g = gen();

console.log(g.next(1)); 
console.log(g.next(2));