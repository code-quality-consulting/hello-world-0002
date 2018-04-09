/*jslint
    node
*/

import assert from "assert";
import {makeGreeting, makeGreeter} from "./index";

const makeEnglishGreeting = makeGreeter("English");
assert.equal(makeEnglishGreeting(), "Hello world!");
assert.equal(makeGreeting("Ben"), "Hello Ben!");
assert.equal(makeGreeting("", "Spanish"), "\u00A1Hola mundo!");
assert.equal(makeGreeting("Alfredo", "Spanish"), "\u00A1Hola Alfredo!");
console.log("success");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better
*/
