const companyAdministration = require('./companyAdministration')
const {assert} = require('chai')
const {expect} = require('chai')


describe('function tests', () => {
    
    describe('hiringEmployee tests', () => {
        it('position not Programmer', () => {
            expect(()=> companyAdministration.hiringEmployee("asd","Manager",10)).to.throw("We are not looking for workers for this position.")
        });
        it('exp more than 3y', () => {
            expect(companyAdministration.hiringEmployee("Stefan","Programmer",4)).to.equal(`Stefan was successfully hired for the position Programmer.`)
        });
        it('exp more equal to 3y', () => {
            expect(companyAdministration.hiringEmployee("Stefan","Programmer",3)).to.equal(`Stefan was successfully hired for the position Programmer.`)
        });
        it('exp more below 3y', () => {
            expect(companyAdministration.hiringEmployee("Stefan","Programmer",2)).to.equal(`Stefan is not approved for this position.`)
        });

    
    });

    describe('calculateSalary tests', () => {
        
        it('invalid input string', () => {
            expect(()=> companyAdministration.calculateSalary("10")).to.throw("Invalid hours")
        });
        it('invalid input negative num', () => {
            expect(()=> companyAdministration.calculateSalary(-2)).to.throw("Invalid hours")
        });
        it('invalid input array', () => {
            expect(()=> companyAdministration.calculateSalary([2])).to.throw("Invalid hours")
        });
        it('happy path below 160h', () => {
            expect(companyAdministration.calculateSalary(1)).to.equal(15)
        });
        it('happy path above 160h', () => {
            expect(companyAdministration.calculateSalary(200)).to.equal(4000)
        });
        it('happy path 0h', () => {
            expect(companyAdministration.calculateSalary(0)).to.equal(0)
        });


    });
   
    
    describe('firedEmployee tests', () => {
        it('invalid input ', () => {
            expect(()=> companyAdministration.firedEmployee(["asd"],"2")).to.throw("Invalid input")
        });
        it('invalid input ', () => {
            expect(()=> companyAdministration.firedEmployee("2",[])).to.throw("Invalid input")
        });
        it('happy path ', () => {
            expect(companyAdministration.firedEmployee(["a","b","c"],1)).to.equal("a, c")
        });
        it('happy path 2', () => {
            expect(companyAdministration.firedEmployee(["a","b","c"],0)).to.equal("b, c")
        });
        it('happy path 2', () => {
            expect(()=> companyAdministration.firedEmployee(["a","b","c"],6)).to.throw("Invalid input")
        });
        it('happy path 2', () => {
            expect(()=> companyAdministration.firedEmployee(["a"],1)).to.throw("Invalid input")
        });
        it('invalid input', () => {
            expect(()=> companyAdministration.firedEmployee(["a","b","c"],-1)).to.throw("Invalid input")
        });
        it('invalid input', () => {
            expect(()=> companyAdministration.firedEmployee(["a",],1)).to.throw("Invalid input")
        });
        it('happy path 2', () => {
            expect(companyAdministration.firedEmployee(["a"],0)).to.equal("")
        });
        it('invalid input', () => {
            expect(()=> companyAdministration.firedEmployee("a",0)).to.throw("Invalid input")
        });
        
    });

});