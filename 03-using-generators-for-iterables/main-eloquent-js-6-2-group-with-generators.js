#!/usr/bin/env node 

import { Group } from './eloquent-js-6-2-group-with-generators.js';

let group = Group.from([10, 20]);
console.log(group.has(10)); // → true
console.log(group.has(30)); // → false
group.add(10);
group.delete(10);
console.log(group.has(10)); // → false

for (let value of Group.from(['a', 'b', 'c'])) {
  process.stdout.write(value + " ");
}
// → a b c
