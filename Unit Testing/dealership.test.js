const {expect} = require('chai')
const dealership = require('./dealership')


describe('function tests', () => {
    
    describe('newCarCost tests', () => {
        // with old car
        it('there is old car A4', () => {
            expect(dealership.newCarCost("Audi A4 B8",50000)).to.equal(35000)
            expect(dealership.newCarCost("Audi A4 B8",15001)).to.equal(1)
        });
        it('there is old car A6', () => {
            expect(dealership.newCarCost("Audi A6 4K",50000)).to.equal(30000)
            expect(dealership.newCarCost("Audi A6 4K",20000)).to.equal(0)

        });
        it('there is old car A8', () => {
            expect(dealership.newCarCost("Audi A8 D5",50000)).to.equal(25000)
            expect(dealership.newCarCost("Audi A8 D5",25001)).to.equal(1)

        });
        it('there is old car TT', () => {
            expect(dealership.newCarCost("Audi TT 8J",50000)).to.equal(36000)
            expect(dealership.newCarCost("Audi TT 8J",14000)).to.equal(0)

        });
        // without old car or unknown car
        it('there is old but not in the list', () => {
            expect(dealership.newCarCost("Honda",50000)).to.equal(50000)
        });
        it('there is old but not in the list', () => {
            expect(dealership.newCarCost("",50000)).to.equal(50000)
        });
        it('there is old but not in the list', () => {
            expect(dealership.newCarCost(undefined,50000)).to.equal(50000)
        });
        
    });

    describe('carEquipment tests', () => {
        it('extras tests', () => {

            expect(dealership.carEquipment(["a","b","c","d"],[0,2])).to.eql(["a","c"])
            expect(dealership.carEquipment(["a","b","c","d"],[3,1])).to.eql(["d","b"])
            expect(dealership.carEquipment(["a","b","c"],[0])).to.eql(["a"])
            expect(dealership.carEquipment(["a"],[0])).to.eql(["a"])



        });
    });

    describe('euroCategory tests', () => {
        
        it('category tests', () => {
            // low category
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(2)).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(1)).to.equal('Your euro category is low, so there is no discount from the final price!')
            expect(dealership.euroCategory(0)).to.equal('Your euro category is low, so there is no discount from the final price!')


            expect(dealership.euroCategory(4)).to.equal('We have added 5% discount to the final price: 14250.')
            expect(dealership.euroCategory(5)).to.equal('We have added 5% discount to the final price: 14250.')
            expect(dealership.euroCategory(6)).to.equal('We have added 5% discount to the final price: 14250.')


        });

    });
})