import { add, subtract, pi } from './math.js';
import { greet } from './greet.js';
import { capitalize } from './utils.js';

console.log("Add: ", add(5, 3)); 
console.log("Subtract: ", subtract(10, 4));
console.log("Value of pi: ", pi); 

const name = "alex";
console.log(greet(capitalize(name))); 