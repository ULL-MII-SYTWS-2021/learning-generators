function* gen() {
    try {
      let result = yield "2 + 2 = ?"; // (1)
  
      console.log("The execution does not reach here, because the exception is thrown above");
    } catch(e) {
      console.log(e.message); // shows the error
    }
  }
  
  let generator = gen();
  
  let question = generator.next().value;
  
  let r = generator.throw(new Error("The answer is not found in my database")); // (2)
  console.log(r); // { value: undefined, done: true }