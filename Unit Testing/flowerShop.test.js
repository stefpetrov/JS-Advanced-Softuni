const {assert} = require('chai')
const {expect} = require('chai')
const flowerShop = require('./flowersShop')

describe('test of flowerShop', () => {

    describe('test for calcPriceOfFlowers', () => {
        //indalid inputs
        it('test with invalid input ', () => {
            expect(()=> flowerShop.calcPriceOfFlowers("tulip","10","10")).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.calcPriceOfFlowers("tulip",10,"10")).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.calcPriceOfFlowers([],10,2)).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.calcPriceOfFlowers({},10,3)).to.throw("Invalid input!")
        });
        // happy path
        it('valid input correct result', () => {
            assert(flowerShop.calcPriceOfFlowers("tulip",15,2) === "You need $30.00 to buy tulip!")
        });
        it('valid input correct result', () => {
            assert(flowerShop.calcPriceOfFlowers("tulip",10,2) === "You need $20.00 to buy tulip!")
        });
        
    });

    describe('test for checkFlowersAvailable', () => {

        it('test are the flowers are available', () => {
            assert(flowerShop.checkFlowersAvailable("Tulip",["Tulip","Rose"]) === "The Tulip are available!")
        });
        it('test are the flowers are available', () => {
            assert(flowerShop.checkFlowersAvailable("Rose",["Rose"]) === "The Rose are available!")
        });
        it('test are the flowers are unavailable', () => {
            assert(flowerShop.checkFlowersAvailable("Tulip",["Rose"]) === "The Tulip are sold! You need to purchase more!")
        });
        it('test are the flowers are unavailable', () => {
            assert(flowerShop.checkFlowersAvailable("Tulip",[]) === "The Tulip are sold! You need to purchase more!")
        });
        
    });

    describe('test for sellFlowers', () => {
        
         //indalid inputs
         it('test with invalid input ', () => {
            expect(()=> flowerShop.sellFlowers(["Tulip","Rose"],"10")).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.sellFlowers(["Tulip","Rose"],true)).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.sellFlowers(["Tulip","Rose"],5)).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.sellFlowers(["Tulip","Rose"],-1)).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.sellFlowers([],0)).to.throw("Invalid input!")
        });
        it('test with invalid input ', () => {
            expect(()=> flowerShop.sellFlowers("Tulip",0)).to.throw("Invalid input!")
        });

        //valid inputs

        it('test are the flowers are available', () => {
            assert(flowerShop.sellFlowers(["Tulip","Rose","Orchid"],1) === "Tulip / Orchid")
        });
        it('test are the flowers are available', () => {
            assert(flowerShop.sellFlowers(["Tulip","Rose","Orchid"],0) === "Rose / Orchid")
        });

    });
    
});