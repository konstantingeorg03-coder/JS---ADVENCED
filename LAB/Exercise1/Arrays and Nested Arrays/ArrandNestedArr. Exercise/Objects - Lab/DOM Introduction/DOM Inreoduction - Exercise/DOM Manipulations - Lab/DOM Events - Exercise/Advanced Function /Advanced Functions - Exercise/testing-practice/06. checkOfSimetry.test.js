import { expect } from "chai";

import { isSymmetric } from "./06. checkOfSimetry.mjs";

describe('isSymmetric', () => {
    it('should return true for a symmetric array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('should return true for a symmetric array with even length', () => {
        expect(isSymmetric([1, 2, 2, 1])).to.be.true;
    });

    it('should return true for a symmetric array of strings', () => {
        expect(isSymmetric(['a', 'b', 'a'])).to.be.true;
    });

    it('should return true for a symmetric array with mixed types', () => {
        expect(isSymmetric([5, 'hi', { a: 5 }, 'hi', 5])).to.be.true;
    });

    it('should return true for an empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true for a single-element array', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('should return false for a non-symmetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false when only first and last match', () => {
        expect(isSymmetric([1, 2, 3, 4, 1])).to.be.false;
    });

    it('should return false for elements of different types', () => {
        expect(isSymmetric([1, '1'])).to.be.false;
    });

    it('should return false for a string', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('should return false for a number', () => {
        expect(isSymmetric(5)).to.be.false;
    });

    it('should return false for an object', () => {
        expect(isSymmetric({ a: 1 })).to.be.false;
    });

    it('should return false for undefined', () => {
        expect(isSymmetric()).to.be.false;
    });
});