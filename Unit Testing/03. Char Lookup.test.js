const lookupChar = require('./03. Char Lookup.js')
const assert = require('chai').assert


describe('lookupChar function tests', () => {
    
    // tests with incorrect first parameter and valid second
    it('test, if the first parameter is number', () => {
        
        assert(lookupChar(2,3) === undefined)
    });
    it('test, if the first parameter is array', () => {
        
        assert(lookupChar([],5) === undefined)
    });
    it('test, if the first parameter is undefined', () => {
        
        assert(lookupChar(undefined,4) === undefined)
    });
    it('test, if the first parameter is null', () => {
        
        assert(lookupChar(null,7) === undefined)
    });
    it('test, if the first parameter is object', () => {
        
        assert(lookupChar({},1) === undefined)
    });
    // tests with correct first parameter and invalid second

    it('test, if the second parameter is object', () => {
        
        assert(lookupChar('hello',{}) === undefined)
    });
    it('test, if the second parameter is array', () => {
        
        assert(lookupChar('hello',[]) === undefined)
    });
    it('test, if the second parameter is string', () => {
        
        assert(lookupChar('hello',"hi") === undefined)
    });
    it('test, if the second parameter is empty string', () => {
        
        assert(lookupChar('hello',"") === undefined)
    });
    it('test, if the second parameter is empty decimal number', () => {
        
        assert(lookupChar('hello',2.5) === undefined)
    });

    // tests with incorrect both parameters
    it('test, if the first parameter is integer, second parameter is string', () => {
        
        assert(lookupChar(2,"sfs") === undefined)
    });
    it('test, if the first parameter is array, second parameter is decimal number', () => {
        
        assert(lookupChar([],2.5) === undefined)
    });
    it('test, if the first parameter is decimal number, second parameter undefined', () => {
        
        assert(lookupChar(2.2,undefined) === undefined)
    });

    // test with correct parameters, but index is out of bound

    it('test with correct parameters, but index is bigger', () => {
        
        assert(lookupChar('Hello',10) === "Incorrect index")
    });
    it('test with correct parameters, but index is below zero', () => {
        
        assert(lookupChar('Hello',-2) === "Incorrect index")
    });

    // test with correct parameters and correct index

    it('test with correct parameters', () => {
        
        assert(lookupChar('Hello',2) === "l")
    });
    it('test with correct parameters', () => {
        
        assert(lookupChar('Hello',0) === "H")
    });
    


})
