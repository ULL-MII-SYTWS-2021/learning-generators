function *Gen() {
  var input1 = yield 'output1'
  return input1
}

var gen = Gen()

console.log(gen.next());
console.log(gen.next('input1'));