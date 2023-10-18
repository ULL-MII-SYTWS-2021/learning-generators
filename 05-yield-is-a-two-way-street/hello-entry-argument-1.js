function* gen() {
    // Pass a question to the outer code and wait for an answer
    let result = yield "2 + 2 = "; // (*)

    console.log(result); // appears 4 after one second
}

let generator = gen();

let question = generator.next().value; // <-- yield returns the value
process.stdout.write(question);
setTimeout(() => generator.next(4), 1000);
