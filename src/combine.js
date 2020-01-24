// given provided arrays, create all combinations of one item in each array
function combineRecursive(...arrays) {
    if (arrays.length < 2) {
        throw new Error('Cannot combine less than 2 arrays.')
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
    if (arrays.length < 2) {
        throw new Error('Cannot combine less than 2 arrays.')
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

module.exports = { combineRecursive, combineIterative };