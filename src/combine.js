/*
  Given an arbitrary number of arrays of words, output all combinations of one word of each array.
  eg.:
    [['a'], ['b'], ['c']] => ['abc']
    [['a'], ['b', 'c']] => ['ab', 'ac']
    [['a'], [], ['b']] => []
*/
function combineRecursive(...arrays) {
    if (!arrays || arrays.length < 2) {
        throw new Error("Cannot combine less than 2 arrays.");
    }

    if (arrays.length > 2) {
        return combineRecursive(
            arrays[0],
            combineRecursive(...arrays.slice(1))
        );
    }

    // arrays.length is exactly 2
    const combinations = [];
    for (const word0 of arrays[0]) {
        for (const word1 of arrays[1]) {
            combinations.push(word0 + word1);
        }
    }
    return combinations;
}

function combineIterative(...arrays) {
    if (!arrays || arrays.length < 2) {
        throw new Error("Cannot combine less than 2 arrays.");
    }

    let allCombined = arrays[0];
    let tracker = 1; // tracks which array we are combining
    while (tracker < arrays.length) {
        const newCombined = [];
        for (const word0 of allCombined) {
            for (const word1 of arrays[tracker]) {
                newCombined.push(word0 + word1);
            }
        }
        tracker++;
        allCombined = newCombined;
    }

    return allCombined;
}

module.exports = { combineRecursive, combineIterative };
