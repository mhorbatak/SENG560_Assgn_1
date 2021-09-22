const expect = require('chai').expect;
const math = require("../index");


describe('index.js tests', () => {

    /*  Unit tests for addNumbers() */
    describe('math.addNumbers() Test', () => {
        it('should equal 2', () => {
            const result = math.addNumbers(1, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = math.addNumbers(2, 2);
            expect(result).to.equal(4);
        });
        it('should throw error', () => {
            const result = math.addNumbers();
            expect(result).to.equal("Please provide values and/or valid numbers");
        });
    });

    /*  Unit tests for subtractNumbers() */
    describe('math.subtractNumbers() Test', () => {
        it('should equal 2', () => {
            const result = math.subtractNumbers(3, 1);
            expect(result).to.equal(2);
        });
        it('should equal 4', () => {
            const result = math.subtractNumbers(10, 6);
            expect(result).to.equal(4);
        });
        it('should throw error', () => {
            const result = math.subtractNumbers();
            expect(result).to.equal("Please provide values and/or valid numbers");
        });
    });


    //end of unit testing
});