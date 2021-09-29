class FreeCodeCamp {
    // Find the Symmetric Difference Between Arrays
    sym = (...args) => [
        ...new Set(args.reduce((array1, array2) => [
            ...array1.filter(value => !array2.includes(value)),
            ...array2.filter(value => !array1.includes(value))
        ]))
    ].sort((a, b) => a - b);

    // Inventory Update
    updateInventory = (arr1, arr2) => {
        arr1.forEach(itemArr1 => {
            arr2.forEach((itemArr2, index) => {
                if (itemArr1[1] === itemArr2[1]) {
                    itemArr1[0] += itemArr2[0];
                    arr2.splice(index, 1);
                }
            })
        });
        return arr1.concat(arr2).sort((a, b) => a[1].localeCompare(b[1]));
    };
}

module.exports = FreeCodeCamp;

// const fcc = new FreeCodeCamp();
// console.log(fcc.updateInventory([
//     [21, "Bowling Ball"],
//     [2, "Dirty Sock"],
//     [1, "Hair Pin"],
//     [5, "Microphone"]
// ], [
//     [2, "Hair Pin"],
//     [3, "Half-Eaten Apple"],
//     [67, "Bowling Ball"],
//     [7, "Toothpaste"]
// ]));