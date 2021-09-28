const assert = require('assert');
const FreeCodeCamp = require('../model/freeCodeCamp');

describe('Find the Symetric Diference', () => {
    it('[1, 2, 3], [2, 3, 4]', () => {
        const fcc = new FreeCodeCamp();
        assert.deepEqual(fcc.sym([1, 2, 3], [2, 3, 4]), [1, 4]);
    });
    it('[1, 2, 3], [5, 2, 1, 4]', () => {
        const fcc = new FreeCodeCamp();
        assert.deepEqual(fcc.sym([1, 2, 3], [5, 2, 1, 4]), [3, 4, 5]);
    });
    it('[1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]', () => {
        const fcc = new FreeCodeCamp();
        assert.deepEqual(fcc.sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]), [1, 4, 5]);
    });

});