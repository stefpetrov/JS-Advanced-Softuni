const {assert} = require('chai')
const {expect} = require('chai')
const rentCar = require('./rentCar')

describe('rentCar unit tests', () => {
    
    describe('searchCar tests', () => {
        // invalid input
        it(' input with arr and num', () => {
            expect(()=> rentCar.searchCar([],23)).to.throw('Invalid input!')
        });
        it('input with obj and string', () => {
            expect(()=> rentCar.searchCar({},"Audi")).to.throw('Invalid input!')
        });
        it('input with undefined', () => {
            expect(()=> rentCar.searchCar([],undefined)).to.throw('Invalid input!')
        });

        // valid input but no matches

        it('input with undefined', () => {
            expect(()=> rentCar.searchCar(['Audi','BMW'],"Honda")).to.throw('There are no such models in the catalog!')
        });
        it('input with undefined', () => {
            expect(()=> rentCar.searchCar([],"Honda")).to.throw('There are no such models in the catalog!')
        });

        // valid input with matches

        it('input with undefined', () => {
            assert(rentCar.searchCar(['Audi','BMW'],"Audi") == 'There is 1 car of model Audi in the catalog!')
        });
        it('input with undefined', () => {
            assert(rentCar.searchCar(['Audi','BMW','Audi'],"Audi") == 'There is 2 car of model Audi in the catalog!')
        });
        it('input with undefined', () => {
            assert(rentCar.searchCar(['Audi','BMW','Audi'],"BMW") == 'There is 1 car of model BMW in the catalog!')
        });

        
    });


    describe('calculatePriceOfCar tests', () => {
        
        // tests with invalid input

        it('input with sting and string', () => {
            expect(()=> rentCar.calculatePriceOfCar("Audi","2")).to.throw('Invalid input!')
        });
        it('input with arr and num', () => {
            expect(()=> rentCar.calculatePriceOfCar([],3)).to.throw('Invalid input!')
        });
        it('input with sting and undefined', () => {
            expect(()=> rentCar.calculatePriceOfCar("Audi",undefined)).to.throw('Invalid input!')
        });

        // valid input, but no matches

        it('input with sting and string', () => {
            expect(()=> rentCar.calculatePriceOfCar("Honda",2)).to.throw('No such model in the catalog!')
        });
        it('input with sting and string', () => {
            expect(()=> rentCar.calculatePriceOfCar("Mazda",1)).to.throw('No such model in the catalog!')
        });
        // valid input with matches

        it('valid input with matches', () => {
            assert(rentCar.calculatePriceOfCar("Audi", 2) == 'You choose Audi and it will cost $72!')
        });
        it('valid input with matches', () => {
            assert(rentCar.calculatePriceOfCar("BMW", 1) == 'You choose BMW and it will cost $45!')
        });

        

    });


    describe('checkBudget tests', () => {
        
        // invalid input

        it('input with stings', () => {
            expect(()=> rentCar.checkBudget("20","2","30")).to.throw('Invalid input!')
        });
        it('input with num and strings', () => {
            expect(()=> rentCar.checkBudget(2,20,"30")).to.throw('Invalid input!')
        });
        it('input with sting and num', () => {
            expect(()=> rentCar.checkBudget('2',20,30)).to.throw('Invalid input!')
        });

        // valid input

        it('valid input with matches', () => {
            assert(rentCar.checkBudget(20,2,50) == 'You rent a car!')
        });
        it('valid input with matches', () => {
            assert(rentCar.checkBudget(10,3,30) == 'You rent a car!')
        });
        it('valid input with matches', () => {
            assert(rentCar.checkBudget(10,3,29) == 'You need a bigger budget!')
        });
        it('valid input with matches', () => {
            assert(rentCar.checkBudget(9,2,17) == 'You need a bigger budget!')
        });


        
    });
});


