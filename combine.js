const assert = require("assert");

// given provided arrays
// create all combinations of one item in each array
function combine(...arrays) {
  if (arrays.length > 2) {
    return combine(arrays[0], combine(...arrays.slice(1)));
  }


  const combinations = [];
  for (const word0 of arrays[0]) {
    for (const word1 of arrays[1]) {
      combinations.push(word0 + word1);
    }
  }
  return combinations;
}

assert(combine, "combine function exists");
assert(
  combine(["a"], ["b", "c", "d"]),
  "combine returns truthy value"
);

assert.deepStrictEqual(
  combine(["a"], ["b", "c"]),
  ["ab", "ac"],
  "combine returns combined stings 1"
);

assert.deepStrictEqual(
  combine(["a"], ["b", "c", "d"]),
  ["ab", "ac", "ad"],
  "combine returns combined stings 1"
);

assert.deepStrictEqual(
  combine(["a"],  ["b"], ["c", "d"]),
  ["abc", "abd"],
  "combine returns combined stings 2"
);

assert.deepStrictEqual(
  combine(["a"],  [], ["c", "d"]),
  [],
  "combine returns combined stings 3"
);

assert.deepStrictEqual(
  combine([], ["c", "d"]),
  [],
  "combine returns combined stings 3"
);
