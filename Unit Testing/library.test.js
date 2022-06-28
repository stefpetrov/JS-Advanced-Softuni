const { expect } = require('chai');
const library = require('./library');

describe('function tests', () => {
    
    describe('calcPriceOfBook', () => {
        //happy path
        it('happy path before 1980', () => {
            expect(library.calcPriceOfBook("The Thing",1970)).to.equal(`Price of The Thing is 10.00`)
        });
        it('happy path eqal to 1980', () => {
            expect(library.calcPriceOfBook("The Thing",1980)).to.equal(`Price of The Thing is 10.00`)
        });
        it('happy path eqal after 1980', () => {
            expect(library.calcPriceOfBook("The Thing",1981)).to.equal(`Price of The Thing is 20.00`)
        });

        // invalid input

        it('Invalid input wrong year', () => {
            expect(()=> library.calcPriceOfBook("The Thing","1981")).to.throw(`Invalid input`)
        });
        it('Invalid input wrong year and book', () => {
            expect(()=> library.calcPriceOfBook(1981,"1981")).to.throw(`Invalid input`)
        });
        it('Invalid input wrong book', () => {
            expect(()=> library.calcPriceOfBook(123,1981)).to.throw(`Invalid input`)
        });
        
    });

    describe('findBook', () => {

        it('the array is zero', () => {
            expect(()=> library.findBook([],"aaa")).to.throw(`No books currently available`)  
        });
        it('the book is in the array', () => {
            expect(library.findBook(["aaa"],"aaa")).to.equal(`We found the book you want.`)  
        });
        it('the book is in the array', () => {
            expect(library.findBook(["aaa","bbb"],"aaa")).to.equal(`We found the book you want.`)  
        });
        it('the book is not in the array', () => {
            expect(library.findBook(["aaa"],"bbb")).to.equal(`The book you are looking for is not here!`)  
        });

        
    });

    describe('arrangeTheBooks', () => {
        // invalid input
        it('not a integer,decimal', () => {
            expect(()=> library.arrangeTheBooks(2.2)).to.throw(`Invalid input`)  
        });
        it('not a integer, string', () => {
            expect(()=> library.arrangeTheBooks("2")).to.throw(`Invalid input`)  
        });
        it('negative int', () => {
            expect(()=> library.arrangeTheBooks(-2)).to.throw(`Invalid input`)  
        });
        // happy path

        it('below 40', () => {
            expect(library.arrangeTheBooks(30)).to.equal(`Great job, the books are arranged.`)  
        });
        it('more than 40', () => {
            expect(library.arrangeTheBooks(41)).to.equal(`Insufficient space, more shelves need to be purchased.`)  
        });
        it('equal to 40', () => {
            expect(library.arrangeTheBooks(40)).to.equal(`Great job, the books are arranged.`)  
        });
    });

});
