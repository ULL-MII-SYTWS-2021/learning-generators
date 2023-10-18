function* gen() {
    let ask1 = yield "2 + 2 = ?";
  
    console.log(ask1); // 4
  
    let ask2 = yield "3 * 3 = ?"
  
    console.log(ask2); // 9
  }
  
  let generator = gen();
  
  /* The first call generator.next() should be always made without an argument
  (the argument is ignored if passed). 
  It starts the execution and returns the result of the first yield "2+2=?". 
  At this point the generator pauses the execution */
  
  console.log( generator.next().value ); // "2 + 2 = ?"
  
  /* On generator.next(4), the generator resumes, and 
     4 is assigned to ask1 */
  console.log( generator.next(4).value ); // "3 * 3 = ?"
  
  console.log( generator.next(9).done ); // true