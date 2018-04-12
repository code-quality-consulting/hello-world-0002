/*jslint
    node
*/

import assert from "assert";
import {makeGreeter} from "./index";

const greet = {
    "english": makeGreeter("English"),
    "spanish": makeGreeter("Spanish"),
    "russian": makeGreeter("Russian")
}


assert.equal(greet.english(), "Hello world!");
assert.equal(greet.english("Ben"), "Hello Ben!");
assert.equal(greet.spanish(), "\u00A1Hola mundo!");
assert.equal(
    greet.spanish("Andr\u00E9s", "Spanish"),
    "\u00A1Hola Andr\u00E9s!"
);
assert.equal(greet.russian(), "Привет мир!");
assert.equal(greet.russian("Mike"), "Привет Mike!");
console.log("success");

/*
    1) Make a failing test
    2) Make it pass
    3) Make it pass better
*/
