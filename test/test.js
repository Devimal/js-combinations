const assert = require("assert");
const { combineRecursive, combineIterative } = require("../src/combine");

// combineRecursive tests
assert(combineRecursive, "combineRecursive function exists");
assert(
    combineRecursive(["a"], ["b", "c", "d"]),
    "combineRecursive returns truthy value"
);

assert.deepStrictEqual(
    combineRecursive(["a"], ["b", "c"]),
    ["ab", "ac"],
    "combineRecursive returns combined stings 1"
);

assert.deepStrictEqual(
    combineRecursive(["a"], ["b", "c", "d"]),
    ["ab", "ac", "ad"],
    "combineRecursive returns combined stings 1"
);

assert.deepStrictEqual(
    combineRecursive(["a"], ["b"], ["c", "d"]),
    ["abc", "abd"],
    "combineRecursive returns combined stings 2"
);

assert.deepStrictEqual(
    combineRecursive(["a"], [], ["c", "d"]),
    [],
    "combineRecursive returns combined stings 3"
);

assert.deepStrictEqual(
    combineRecursive([], ["c", "d"]),
    [],
    "combineRecursive returns combined stings 3"
);

// combineIterative tests
assert(combineIterative, "combineIterative function exists");
assert(
    combineIterative(["a"], ["b", "c", "d"]),
    "combineIterative returns truthy value"
);

assert.deepStrictEqual(
    combineIterative(["a"], ["b", "c"]),
    ["ab", "ac"],
    "combineIterative returns combined stings 1"
);

assert.deepStrictEqual(
    combineIterative(["a"], ["b", "c", "d"]),
    ["ab", "ac", "ad"],
    "combineIterative returns combined stings 1"
);

assert.deepStrictEqual(
    combineIterative(["a"], ["b"], ["c", "d"]),
    ["abc", "abd"],
    "combineIterative returns combined stings 2"
);

assert.deepStrictEqual(
    combineIterative(["a"], [], ["c", "d"]),
    [],
    "combineIterative returns combined stings 3"
);

assert.deepStrictEqual(
    combineIterative([], ["c", "d"]),
    [],
    "combineIterative returns combined stings 3"
);
