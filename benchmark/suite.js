const Benchmark = require("benchmark");
const { combineRecursive, combineIterative } = require("../src/combine");
const suite2x10 = new Benchmark.Suite();

const arrayOf10 = [...Array(10).keys()].map(v => v + "");
const arrayOf3 = [...Array(3).keys()].map(v => v + "");

// add tests
suite2x10
    .add("combineRecursive 2 arrays of 10 items", function() {
        combineRecursive(arrayOf10, arrayOf10);
    })
    .add("combineIterative  2 arrays of 10 items", function() {
        combineIterative(arrayOf10, arrayOf10);
    })
    // add listeners
    .on("cycle", function(event) {
        console.log(String(event.target));
    })
    .on("complete", function() {
        console.log(
            "Fastest for 2x10 is " + this.filter("fastest").map("name")
        );
    })
    // run async
    .run({ async: false });
console.log();

const suite3x10 = new Benchmark.Suite();
// add tests
suite3x10
    .add("combineRecursive 3 arrays of 10 items", function() {
        combineRecursive(arrayOf10, arrayOf10, arrayOf10);
    })
    .add("combineIterative  3 arrays of 10 items", function() {
        combineIterative(arrayOf10, arrayOf10, arrayOf10);
    })
    // add listeners
    .on("cycle", function(event) {
        console.log(String(event.target));
    })
    .on("complete", function() {
        console.log(
            "Fastest for 3x10 is " + this.filter("fastest").map("name")
        );
    })
    // run async
    .run({ async: false });
console.log();

const suite10x3 = new Benchmark.Suite();
// add tests
suite10x3
    .add("combineRecursive 10 arrays of 3 items", function() {
        combineRecursive(...[...Array(10).keys()].map(() => arrayOf3));
    })
    .add("combineIterative  10 arrays of 3 items", function() {
        combineIterative(...[...Array(10).keys()].map(() => arrayOf3));
    })
    // add listeners
    .on("cycle", function(event) {
        console.log(String(event.target));
    })
    .on("complete", function() {
        console.log(
            "Fastest for 3x10 is " + this.filter("fastest").map("name")
        );
    })
    // run async
    .run({ async: false });
console.log();
