class FreeCodeCamp {
    // Find the Symmetric Difference Between Arrays
    sym = (...args) => [
        ...new Set(args.reduce((array1, array2) => [
            ...array1.filter(value => !array2.includes(value)),
            ...array2.filter(value => !array1.includes(value))
        ]))
    ].sort((a, b) => a - b);
}

module.exports = FreeCodeCamp;

// const fcc = new FreeCodeCamp();
// console.log(fcc.sym([1, 2, 3, 5, 6, 7, 7, 50, 6], [2, 3, 4]));