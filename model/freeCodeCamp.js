class FreeCodeCamp {
    // Find the Symmetric Difference Between Arrays
    sym = (...args) => {
        args = args.reduce((a, b) => {
            return a.concat(b);
        });
    }
}

module.exports = FreeCodeCamp;

const fcc = new FreeCodeCamp();
console.log(fcc.sym([1, 2, 3], [2, 3, 4]));