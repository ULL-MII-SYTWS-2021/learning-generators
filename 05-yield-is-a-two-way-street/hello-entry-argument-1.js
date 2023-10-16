function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2 = ?"; // (*)

    console.log(result);
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value

setTimeout(() => generator.next(4), 1000);
