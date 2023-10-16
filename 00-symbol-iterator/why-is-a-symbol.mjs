/*
Why is Symbol.iterator a symbol rather than a string? 
Suppose instead of using Symbol.iterator, the iterable spec checked for the presence of a string property 'iterator'. 
Furthermore, suppose you had the below class that was meant to be an iterable.
*/

class MyClass {
  constructor(obj) {
    Object.assign(this, obj);
  }

  iterator() {
    const keys = Object.keys(this);
    let i = 0;
    return (function*() {
      if (i >= keys.length) {
        return;
      }
      yield keys[i++];
    })();
  }
}

/* 
Instances of MyClass will be iterables that allow you to iterate over the object's keys. 

But the above class also has a potential flaw. 
Suppose a malicious user were to pass an object with an iterator property to MyClass.
*/

const obj = new MyClass({ iterator: 'not a function' });

/*
If you were to use for/of with obj, JavaScript would throw `TypeError: obj is not iterable`. 
That's because the user-specified iterator function would overwrite the class' iterator property. 

This is a similar security issue to prototype pollution, 
where naively copying user data may cause issues with special properties like `__proto__` and `constructor`.

The key pattern here is that symbols enable a clear separation between user data and program data in objects. 
Since symbols cannot be represented in JSON, 
there's no risk of data passed into an Express API having a bad `Symbol.iterator` property. 

In objects that mix user data with built-in functions and methods, like Mongoose models, 
you can use symbols to ensure that user data doesn't conflict with your built-in functionality.
*/