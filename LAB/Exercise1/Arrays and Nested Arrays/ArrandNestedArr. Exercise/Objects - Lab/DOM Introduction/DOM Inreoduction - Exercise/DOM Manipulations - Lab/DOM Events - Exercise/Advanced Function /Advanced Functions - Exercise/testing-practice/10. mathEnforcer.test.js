import { expect } from "chai";

import { mathEnforcer } from "./10. mathEnforcer.mjs";

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('should return undefined for invalid num parameter - String', () => {
            expect(mathEnforcer.addFive('5')).to.be.undefined;
        });

        it('should return the result of given parameter plus 5', () => {
            expect(mathEnforcer.addFive(5)).to.equal(10);чефбцжиер
        });

        it('should return 0 for the given parameter is negative number', () => {
            expect(mathEnforcer.addFive(-1)).to.equal(4);
        });

        it('should return close to the non integer', () => {
            expect(mathEnforcer.addFive(1.1)).to.be.closeTo(6.1, 0.01);
        });
    });

    describe('sunstractTen', () => {
        it('should return undefined for invalid num parameter - String', () => {
            expect(mathEnforcer.subtractTen('5')).to.be.undefined;
        });

        it('should return the result of given parameter plus 5', () => {
            expect(mathEnforcer.subtractTen(5)).to.equal(-5);
        });

        it('should return 0 for the given parameter is negative number', () => {
            expect(mathEnforcer.subtractTen(-1)).to.equal(-11);
        });

        it('should return close to the non integer', () => {
            expect(mathEnforcer.subtractTen(1.1)).to.be.closeTo(-8.9, 0.01);
        });
    });

    describe('sum', () => {
        it('should return undefined for invalid num parameter - String', () => {
            expect(mathEnforcer.sum('1', 2)).to.be.undefined;
        });

        it('should return undefined for parameter - String', () => {
            expect(mathEnforcer.sum(1, '2')).to.be.undefined
        });

        it('should return sum between the given negative number - negative result', () => {
            expect(mathEnforcer.sum(-1, -3)).to.equal(-4);
        });

        it('should return close to the non integer', () => {
            expect(mathEnforcer.sum(1.1, 2.2)).to.be.closeTo(3.3, 0.01);
        });

        it('should return sum of two positive numbers', () => {
            expect(mathEnforcer.sum(5, 5)).to.equal(10);
        });
    });
});