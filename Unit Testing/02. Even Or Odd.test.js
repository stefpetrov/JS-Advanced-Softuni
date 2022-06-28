const isOddOrEven = require('./02. Even Or Odd.js')
const {assert} = require('chai')

describe('isOddOrEven function tests', () => {
    // tests with invalid input
    it('test with incorrect input number', () => {
        assert(isOddOrEven(2) === undefined)
    });
    it('test with incorrect input array', () => {
        assert(isOddOrEven([]) === undefined)
    });
    it('test with incorrect input object', () => {
        assert(isOddOrEven({}) === undefined)
    });
    it('test with incorrect input undefined', () => {
        assert(isOddOrEven(undefined) === undefined)
    });
    it('test with incorrect input null', () => {
        assert(isOddOrEven(null) === undefined)
    });
    

    // test with correct input

    it('test with string with even length', () => {
        assert(isOddOrEven("Hi") === 'even')
    });
    it('test with string with odd length', () => {
        assert(isOddOrEven('Hey') === 'odd')
    });
    

    
})