const assert = require("assert");
const { combineRecursive, combineIterative } = require("../src/combine");

// combineRecursive tests
assert(combineRecursive, "combineRecursive function exists");
assert(
    combineRecursive(["a"], ["b", "c", "d"]),
    "combineRecursive returns truthy value"
);

assert.deepStrictEqual(combineRecursive(["a"], ["b", "c"]), ["ab", "ac"]);

assert.deepStrictEqual(combineRecursive(["a"], ["b", "c", "d"]), [
    "ab",
    "ac",
    "ad"
]);

assert.deepStrictEqual(combineRecursive(["a"], ["b"], ["c", "d"]), [
    "abc",
    "abd"
]);

assert.deepStrictEqual(combineRecursive(["a"], [], ["c", "d"]), []);

assert.deepStrictEqual(combineRecursive(["a"], ["c", "d"], []), []);

assert.deepStrictEqual(combineRecursive([], ["c", "d"]), []);

// combineIterative tests
assert(combineIterative, "combineIterative function exists");
assert(combineIterative(["a"], ["b", "c", "d"]));

assert.deepStrictEqual(combineIterative(["a"], ["b", "c"]), ["ab", "ac"]);

assert.deepStrictEqual(combineIterative(["a"], ["b", "c", "d"]), [
    "ab",
    "ac",
    "ad"
]);

assert.deepStrictEqual(combineIterative(["a"], ["b"], ["c", "d"]), [
    "abc",
    "abd"
]);

assert.deepStrictEqual(combineIterative(["a"], [], ["c", "d"]), []);

assert.deepStrictEqual(combineIterative(["a"], ["c", "d"], []), []);

assert.deepStrictEqual(combineIterative([], ["c", "d"]), []);
