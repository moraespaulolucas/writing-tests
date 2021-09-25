const assert = require('assert');
const FreeCodeCamp = require('../model/freeCodeCamp');

describe('Free Code Camp Challenges', () => {
    it('Find the Symetric Diference', () => {
        const fcc = new FreeCodeCamp();
        assert.equal(fcc.sym([1, 2, 3], [2, 3, 4]), [1, 4]);
    })
})