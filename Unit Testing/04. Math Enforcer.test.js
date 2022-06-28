const mathEnforcer = require('./04. Math Enforcer')
const assert = require('chai').assert
let expect = require('chai').expect


describe('mathEnforcer function tests', () => {
    
    describe('addFive function tests', () => {

        // tests with incorrect input

        it('check if the parameter is string', () => {
            assert(mathEnforcer.addFive("hundred") === undefined)
        });
        it('check if the parameter is array', () => {
            assert(mathEnforcer.addFive([]) === undefined)
        });
        it('check if the parameter is object', () => {
            assert(mathEnforcer.addFive({}) === undefined)
        });
        it('check if the parameter is undefined', () => {
            assert(mathEnforcer.addFive(undefined) === undefined)
        });
        it('check if the parameter is Null', () => {
            assert(mathEnforcer.addFive(null) === undefined)
        });
        
        // test with correct input

        it('check if the parameter is integer', () => {
            assert(mathEnforcer.addFive(2) === 7)
        });
        it('check if the parameter is decimal number', () => {
            expect((mathEnforcer.addFive(5.222))).to.be.closeTo(10.222,0.01)
        });
        it('check if the parameter is zero', () => {
            assert(mathEnforcer.addFive(0) === 5)
        });
        it('check if the parameter is negagitve number', () => {
            assert(mathEnforcer.addFive(-10) === -5)
        });
        it('check if the parameter is big number', () => {
            assert(mathEnforcer.addFive(1111111) === 1111116)
        })

    });

    describe('subtractTen function tests', () => {

        // tests with incorrect input

        it('check if the parameter is string', () => {
            assert(mathEnforcer.subtractTen("hundred") === undefined)
        });
        it('check if the parameter is array', () => {
            assert(mathEnforcer.subtractTen([]) === undefined)
        });
        it('check if the parameter is object', () => {
            assert(mathEnforcer.subtractTen({}) === undefined)
        });
        it('check if the parameter is undefined', () => {
            assert(mathEnforcer.subtractTen(undefined) === undefined)
        });
        it('check if the parameter is Null', () => {
            assert(mathEnforcer.subtractTen(null) === undefined)
        });
        
        // test with correct input

        it('check if the parameter is integer', () => {
            assert(mathEnforcer.subtractTen(12) === 2)
        });
        it('check if the parameter is decimal number', () => {
            assert(mathEnforcer.subtractTen(12.5) === 2.5)
        });
        it('check if the parameter is zero', () => {
            assert(mathEnforcer.subtractTen(0) === -10)
        });
        it('check if the parameter is negagitve number', () => {
            assert(mathEnforcer.subtractTen(-3) === -13)
        });
        it('check if the parameter is big number', () => {
            assert(mathEnforcer.subtractTen(10101010) === 10101000)
        });
        
    });

    describe('sum function tests', () => {

        //test if the both parameters are invalid

        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum("asd","g")=== undefined)
        });
        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum("",true)=== undefined)
        });
        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum(undefined,undefined)=== undefined)
        });
        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum(true,false)=== undefined)
        });
        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum([],[])=== undefined)
        });
        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum({},{})=== undefined)
        });
        it('test if the both parameters are invalid', () => {
            assert(mathEnforcer.sum([],{})=== undefined)
        });

        // test if the first parameters is valid and the second is not valid
        
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(2,{})=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(2,undefined)=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(2,null)=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(2,"num")=== undefined)
        });

        // test if the first parameters is invalid and the second is valid

        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum({},2)=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(undefined,3.1)=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(null,5)=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum("num",10.5)=== undefined)
        });

        // test if the both parameters are invalid

        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum({},[])=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(undefined,"asd")=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum(null,undefined)=== undefined)
        });
        it('test if the first parameters is valid and the second is not valid', () => {
            assert(mathEnforcer.sum("num","asds")=== undefined)
        });

        // test if the both parameters are valid

        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(10,20)=== 30)
        });
        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(1,2)=== 3)
        });
        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(1000,2)=== 1002)
        });
        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(-2,-3)=== -5)
        });
        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(-10,3)=== -7)
        });
        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(0,0)=== 0)
        });
        it('test if the both parameters are valid', () => {
            assert(mathEnforcer.sum(2.5,2.5) === 5)
        });

    });
    
})



