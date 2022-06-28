const {expect} = require('chai')
const carService = require('./03. Exam')


describe('function tests', () => {
    
    describe('isItExpensive tests', () => {
        
        it('test engine', () => {
            expect(carService.isItExpensive("Engine")).to.equal(`The issue with the car is more severe and it will cost more money`)
        });
        it('test Transmission', () => {
            expect(carService.isItExpensive("Transmission")).to.equal(`The issue with the car is more severe and it will cost more money`)
        });
        it('test other problem', () => {
            expect(carService.isItExpensive("Wheels")).to.equal(`The overall price will be a bit cheaper`)
        });
        

    });

    describe('discount  tests', () => {
        // invalid input
        it('invalid input string', () => {
            expect(()=> carService.discount("asd",2)).to.throw("Invalid input")
        });
        it('invalid input string', () => {
            expect(()=> carService.discount("2","2")).to.throw("Invalid input")
        });
        it('invalid input string', () => {
            expect(()=> carService.discount(2,"2")).to.throw("Invalid input")
        });

        //hapy path

        it('test without discount', () => {
            expect(carService.discount(2,1000)).to.equal(`You cannot apply a discount`)
        });
        it('test without discount', () => {
            expect(carService.discount(0,1000)).to.equal(`You cannot apply a discount`)
        });
        it('test without discount', () => {
            expect(carService.discount(1,1000)).to.equal(`You cannot apply a discount`)
        });

        it('test 15% discount', () => {
            expect(carService.discount(3,1000)).to.equal(`Discount applied! You saved 150$`)
        });
        it('test 15% discount', () => {
            expect(carService.discount(4,1000)).to.equal(`Discount applied! You saved 150$`)
        });
        it('test 15% discount', () => {
            expect(carService.discount(7,1000)).to.equal(`Discount applied! You saved 150$`)
        });


        it('test 30% discount', () => {
            expect(carService.discount(8,1000)).to.equal(`Discount applied! You saved 300$`)
        });
        it('test 30% discount', () => {
            expect(carService.discount(9,1000)).to.equal(`Discount applied! You saved 300$`)
        });
    });

    describe('partsToBuy tests', () => {
        // happy path

        it('tests with 2', () => {
            expect(carService.partsToBuy([{ part: "blowoff", price: 145 }, { part: "coil", price: 230 }],["blowoff"])).to.equal(145)
        });
        it('tests with 1', () => {
            expect(carService.partsToBuy([{ part: "blowoff", price: 145 }],["blowoff"])).to.equal(145)
        });
        it('tests with 2', () => {
            expect(carService.partsToBuy([{ part: "blowoff", price: 145 }, { part: "coil", price: 230 }],["blowoff","coil"])).to.equal(375)
        });
        it('tests with 2', () => {
            expect(carService.partsToBuy([{ part: "blowoff", price: 145 }, { part: "coil", price: 230 }],["blowoff","a"])).to.equal(145)
        });
        it('tests with 2', () => {
            expect(carService.partsToBuy([{ part: "blowoff", price: 145 }, { part: "coil", price: 230 }],[""])).to.equal(0)
        });
        it('tests with 2', () => {
            expect(carService.partsToBuy([],["coil"])).to.equal(0)
        });

        // invalid input

        it('invalid input string', () => {
            expect(()=> carService.partsToBuy([],2)).to.throw("Invalid input")
        });
        it('invalid input string', () => {
            expect(()=> carService.partsToBuy(2,[])).to.throw("Invalid input")
        });
        it('invalid input string', () => {
            expect(()=> carService.partsToBuy({},[])).to.throw("Invalid input")
        });
        it('invalid input string', () => {
            expect(()=> carService.partsToBuy([],{})).to.throw("Invalid input")
        });



    });

    
});