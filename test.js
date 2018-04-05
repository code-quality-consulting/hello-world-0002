const assert = require("assert");

function makeGreeting(name) {
    if (name) {
        return "Hello" + " " + name + "!";
    }
    return "Hello world!";
}

assert.equal(makeGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
console.log("success");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better
*/
