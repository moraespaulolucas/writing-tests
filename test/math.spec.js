const assert = require('assert');
const Math = require('../math.js');
const expect = require('chai').expect;

describe('Math class', function () {
    it('Sum numbers', function () {
        const math = new Math();
        assert.equal(math.sum(2, 3, 5), 10);
    });

    it('Minus operation', function (done) {
        const math = new Math();
        math.minus(10, 2, value => {
            assert.equal(value, 8);
        });
        done();
    });

    it('Find average', function () {
        const math = new Math();
        expect(math.average(10, 9, 8)).to.equal(9);
    });
});