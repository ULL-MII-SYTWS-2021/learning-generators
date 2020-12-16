# Generators

## This repo

This repo contains the code for the chapter [Generators, advanced iteration](https://javascript.info/generators-iterators) and others


## The Goal

Read the chapter [Generators, advanced iteration](https://javascript.info/generators-iterators) of JavaScript.info reproducing the examples and exercises.

Additionally:

1. Study and solve the exercise [Groups](https://eloquentjavascript.net/06_object.html#group_iterator) in the book EloquentJS Chapter 6
2. Study an solve the **Iterable groups** extension of the exercise [Groups in EloquentJS Chapter 6](https://eloquentjavascript.net/06_object.html#group_iterator) making the `Group` class from the previous exercise iterable
3. Simplify the solution to making the `Group` class iterable using a generator instead of a plain iterator as suggested in [Chapter 11 of the book Eloquent JS](https://eloquentjavascript.net/11_async.html#h_o+cFzGGhnz)

## How to declare a generator

Generators are created by generator functions 

```js
function* f( ... ) {
    ...
}
```

Only inside generators you can use the `yield` operator.

The caller code and the generator may exchange results via `next`/`yield` calls.

Generators are great for making iterable objects.

Async generators are used to read streams of asynchronously generated data (e.g paginated fetches over a network) in `for await ... of` loops.

## Generator.prototype.next()

The `next()` method returns an object with two properties `done` and `value`. You can also provide a parameter to the `next` method to send a value to the generator.

* [Generator.prototype.next()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/next)

## Generator.prototype.throw()

The `throw()` method resumes the execution of a generator by throwing an error into it and returns an object with two properties `done` and `value`.

* [Generator.prototype.throw()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator/throw)
