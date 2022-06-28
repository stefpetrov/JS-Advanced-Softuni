const {expect} = require('chai')
const cinema = require('./cinema')


describe('function cinema tests', () => {
    
    describe('showMovies', () => {

        it('empty array', () => {
            expect(cinema.showMovies([])).to.equal(`There are currently no movies to show.`)
        });
        it('array with 2 movies', () => {
            expect(cinema.showMovies(["asd","qwe"])).to.equal(`asd, qwe`)
        });
        it('array with 1 movies', () => {
            expect(cinema.showMovies(["asd"])).to.equal(`asd`)
        });
    });

    describe('ticketPrice', () => {
            // happy path
        it('case Normal', () => {
            expect(cinema.ticketPrice("Normal")).to.equal(7.5)
        });
        it('case Premiere', () => {
            expect(cinema.ticketPrice("Premiere")).to.equal(12)
        });it('case Discount', () => {
            expect(cinema.ticketPrice("Discount")).to.equal(5.5)
        });
        // invalid input
        it('not in the schedule', () => {
            expect(()=> cinema.ticketPrice("asd")).to.throw("Invalid projection type.")
        });
        it('not in the schedule', () => {
            expect(()=> cinema.ticketPrice("")).to.throw("Invalid projection type.")
        });

    });

    describe('swapSeatsInHall', () => {
        // invalid input
        it('one num does not exist', () => {
            expect(cinema.swapSeatsInHall(2)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('both of nums does not exist', () => {
            expect(cinema.swapSeatsInHall()).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('second is string', () => {
            expect(cinema.swapSeatsInHall(2,"3")).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('first of nums  is string', () => {
            expect(cinema.swapSeatsInHall("3",4)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('first is decimal', () => {
            expect(cinema.swapSeatsInHall(4.2,5)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('second is decimal', () => {
            expect(cinema.swapSeatsInHall(2,4.2)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('first is over 20', () => {
            expect(cinema.swapSeatsInHall(21,4)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('second is over 20', () => {
            expect(cinema.swapSeatsInHall(2,21)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('second is zero', () => {
            expect(cinema.swapSeatsInHall(2,0)).to.equal("Unsuccessful change of seats in the hall.")
        });
        it('first is zero', () => {
            expect(cinema.swapSeatsInHall(0,3)).to.equal("Unsuccessful change of seats in the hall.")
        });

        // happy path
        it('boths are valid int', () => {
            expect(cinema.swapSeatsInHall(2,3)).to.equal("Successful change of seats in the hall.")
        });
        it('boths are valid int', () => {
            expect(cinema.swapSeatsInHall(1,20)).to.equal("Successful change of seats in the hall.")
        });

    });
});