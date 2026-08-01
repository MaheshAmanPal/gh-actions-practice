const add = require('./index');
if (add(2, 2) !== 4) { throw new Error("Math is broken!"); }
console.log("Test passed!");
