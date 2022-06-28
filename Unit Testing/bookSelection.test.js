const {assert} = require('chai')
const {expect} = require('chai')
const bookSelection = require('./bookSelection')



describe('bookSelection tests', () => {

    describe('function isGenreSuitable tests', () => {
            // test with thriller
        it('genre Thriller if age is above', () => {
            assert(bookSelection.isGenreSuitable("Thriller",13) === 'Those books are suitable')
        });
        it('genre Thriller if age is lower', () => {
            assert(bookSelection.isGenreSuitable("Thriller",10) === `Books with Thriller genre are not suitable for kids at 10 age`)
        });
        it('genre Thriller if age is lower', () => {
            assert(bookSelection.isGenreSuitable("Thriller",12) === `Books with Thriller genre are not suitable for kids at 12 age`)
        });

            // test with Horror

        it('genre Horror if age is above', () => {
                assert(bookSelection.isGenreSuitable("Horror",13) === 'Those books are suitable')
        });
        it('genre Horror if age is lower', () => {
                assert(bookSelection.isGenreSuitable("Horror",10) === `Books with Horror genre are not suitable for kids at 10 age`)
        });
        it('genre Horror if age is lower', () => {
                assert(bookSelection.isGenreSuitable("Horror",12) === `Books with Horror genre are not suitable for kids at 12 age`)
        });




    });

    describe('function isItAffordable tests', () => {
        // valid input
        it('the price is in the budget', () => {
            assert(bookSelection.isItAffordable(10,20) === `Book bought. You have 10$ left`)
        });
        it('the price is equal to the budget', () => {
            assert(bookSelection.isItAffordable(15,15) === `Book bought. You have 0$ left`)
        });
        it('the price is below  the budget', () => {
            expect(bookSelection.isItAffordable(15,10)).to.equal(`You don't have enough money`)
        });

        // invalid input
        
        it('price is not a number', () => {
            expect(()=> bookSelection.isItAffordable("15",10)).to.throw("Invalid input")
        });
        it('budget is not a number', () => {
            expect(()=> bookSelection.isItAffordable(10,"10")).to.throw("Invalid input")
        });
        it('budget and price are not a numbers', () => {
            expect(()=> bookSelection.isItAffordable("asd","10")).to.throw("Invalid input")
        });

    });


    describe('function suitableTitles tests', () => {

        // invalid inputs
        it('books are not an array', () => {
            expect(()=> bookSelection.suitableTitles("asd","asd")).to.throw("Invalid input")
        });
        it('wanted genre is not a string', () => {
            expect(()=> bookSelection.suitableTitles([],23)).to.throw("Invalid input")
        });
        it('wanted genre is not a string and books are not array', () => {
            expect(()=> bookSelection.suitableTitles({},[])).to.throw("Invalid input")
        });

        // valid inputs
        it('test1', () => {
            
            expect(bookSelection.suitableTitles([{title:"The Matrix",genre:"drama"}],"drama")).to.eql(["The Matrix"])
        });
        it('test1', () => {
            
            expect(bookSelection.suitableTitles([{title:"The Matrix",genre:"drama"},{title:"The thing",genre:"Horror"}],"drama")).to.eql(["The Matrix"])
        });

    });
    
});