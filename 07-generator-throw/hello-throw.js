/* To pass an error into a yield, we should call generator.throw(err). 
   In that case, the err is thrown in the line with that yield.
*/
function* gen() {
  try {
    let result = yield "2 + 2 = "; 
    console.log("The execution does not reach here, because the exception is thrown above");
  } catch (e) {
    console.log(e.message); // shows the error
    // yield 4; 
  }
}

let generator = gen();

let question = generator.next().value;
process.stdout.write(question);
let r = generator.throw(new Error("The answer is not found"));
console.log(r); 