import { add, subtract, pi } from './math.js';
import { greet } from './greet.js';
import { capitalize } from './utils.js';

console.log("Add: ", add(5, 3)); // Output: 8
console.log("Subtract: ", subtract(10, 4)); // Output: 6
console.log("Value of pi: ", pi); // Output: 3.14159

const name = "alex";
console.log(greet(capitalize(name))); // Output: Hello, Alex!
