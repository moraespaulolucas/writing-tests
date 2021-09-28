const assert = require('assert');
const FreeCodeCamp = require('../model/freeCodeCamp');

const fcc = new FreeCodeCamp();

describe.skip('Find the Symetric Diference', () => {
    it('[1, 2, 3], [2, 3, 4]', () => {
        assert.deepEqual(fcc.sym([1, 2, 3], [2, 3, 4]), [1, 4]);
    });
    it('[1, 2, 3], [5, 2, 1, 4]', () => {
        assert.deepEqual(fcc.sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
    });
    it('[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]', () => {
        assert.deepEqual(fcc.sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
    });

});

describe('Inventory Update', () => {
    it('Test #1', () => {
        assert.deepEqual(fcc.updateInventory([
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ], [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
        ]), [
            [88, "Bowling Ball"],
            [2, "Dirty Sock"],
            [3, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [5, "Microphone"],
            [7, "Toothpaste"]
        ]);
    });
    it('Test #2', () => {
        assert.deepEqual(fcc.updateInventory([
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ], []), [
            [21, "Bowling Ball"],
            [2, "Dirty Sock"],
            [1, "Hair Pin"],
            [5, "Microphone"]
        ]);
    });
    it('Test #3', () => {
        assert.deepEqual(fcc.updateInventory([], [
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [67, "Bowling Ball"],
            [7, "Toothpaste"]
        ]), [
            [67, "Bowling Ball"],
            [2, "Hair Pin"],
            [3, "Half-Eaten Apple"],
            [7, "Toothpaste"]
        ]);
    });
    it('Test #4', () => {
        assert.deepEqual(fcc.updateInventory([
            [0, "Bowling Ball"],
            [0, "Dirty Sock"],
            [0, "Hair Pin"],
            [0, "Microphone"]
        ], [
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [1, "Bowling Ball"],
            [1, "Toothpaste"]
        ]), [
            [1, "Bowling Ball"],
            [0, "Dirty Sock"],
            [1, "Hair Pin"],
            [1, "Half-Eaten Apple"],
            [0, "Microphone"],
            [1, "Toothpaste"]
        ])
    });

});