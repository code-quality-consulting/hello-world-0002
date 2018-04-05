const assert = require("assert");

function makeGreeting() {
   return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
console.log("success");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better
*/
