# Generators

Generators are created by generator functions 

```js
function* f( ... ) {
    ...
}
```

Inside generators (only) there exists a `yield` operator.

The outer code and the generator may exchange results via `next`/`yield` calls.

Generators are great for making iterable objects.

Async generators are used to read streams of asynchronously generated data (e.g paginated fetches over a network) in `for await ... of` loops.

## Generator.prototype.next()

The `next()` method returns an object with two properties `done` and `value`. You can also provide a parameter to the `next` method to send a value to the generator.

* [Generator.prototype.next()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)

## Generator.prototype.throw()

The `throw()` method resumes the execution of a generator by throwing an error into it and returns an object with two properties `done` and `value`.

* [Generator.prototype.throw()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw)