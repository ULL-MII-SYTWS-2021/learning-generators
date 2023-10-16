// As generators are iterable, we can call all related functionality, 
// e.g. the spread syntax ... 
function* generator() {
    yield 1;
    yield 2;
    yield 3;
}

console.log([-1, 0, ...generator(), 4]);