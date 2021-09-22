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

     /*  Unit tests for multiplyNumbers() */
     describe('math.multiplyNumbers() Test', () => {
        it('should equal 6', () => {
            const result = math.multiplyNumbers(3, 2);
            expect(result).to.equal(6);
        });
        it('should equal 60', () => {
            const result = math.multiplyNumbers(10, 6);
            expect(result).to.equal(60);
        });
        it('should throw error', () => {
            const result = math.multiplyNumbers();
            expect(result).to.equal("Please provide values and/or valid numbers");
        });
    });

         /*  Unit tests for divideNumbers() */
         describe('math.divideNumbers() Test', () => {
            it('should equal 5', () => {
                const result = math.divideNumbers(10, 2);
                expect(result).to.equal(5);
            });
            it('should equal 0.3333333333333333', () => {
                const result = math.divideNumbers(10, 30);
                expect(result).to.equal(0.3333333333333333);
            });
            it('should throw error', () => {
                const result = math.divideNumbers();
                expect(result).to.equal("Please provide values and/or valid numbers");
            });
        });

           /*  Unit tests for squareRoot() */
           describe('math.squareRoot() Test', () => {
            it('should equal 3', () => {
                const result = math.squareRoot(9);
                expect(result).to.equal(3);
            });
            it('should equal 2.449489742783178', () => {
                const result = math.squareRoot(6);
                expect(result).to.equal(2.449489742783178);
            });
            it('should equal 3.24037034920393', () => {
                const result = math.squareRoot(10.5);
                expect(result).to.equal(3.24037034920393);
            });
            it('should throw error', () => {
                const result = math.squareRoot();
                expect(result).to.equal("Please provide values and/or valid numbers");
            });
        });

        /*  Unit tests for exponentNumber() */
        describe('math.exponentNumber() Test', () => {
            it('should equal 64', () => {
                const result = math.exponentNumber(4, 3);
                expect(result).to.equal(64);
            });
            it('should equal 10000', () => {
                const result = math.exponentNumber(100, 2);
                expect(result).to.equal(10000);
            });
            it('should throw error', () => {
                const result = math.exponentNumber();
                expect(result).to.equal("Please provide values and/or valid numbers");
            });
        });

    //end of unit testing
});