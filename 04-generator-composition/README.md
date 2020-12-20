# Generator composition

## What is

Generator composition is a special feature of generators that allows to transparently "embed" generators in each other.

## Example

For instance, we have a function that generates a sequence of numbers:

```js
function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}
```

Now we'd like to reuse it to generate a more complex sequence:
- first, digits `0..9` (with character codes 48..57),
- followed by uppercase alphabet letters `A..Z` (character codes 65..90)
- followed by lowercase alphabet letters `a..z` (character codes 97..122)

We can use this sequence e.g. to create passwords by selecting characters from it (could add syntax characters as well), but let's generate it first.

In a regular function, to combine results from multiple other functions, we 

1. call them, 
2. store the results, and then 
3. join at the end.

For generators, there's a special `yield*` syntax to "embed" (compose) one generator into another.

The composed generator: [hello-composition.js](hello-composition.js)


* The `yield*` directive *delegates* the execution to another generator. 
* This term means that `yield* gen` iterates over the generator `gen` and transparently forwards its yields outside. 
* As if the values were yielded by the outer generator.

