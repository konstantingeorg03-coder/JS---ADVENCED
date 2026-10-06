import { expect } from 'chai';

import { isSymmetric } from './06. checkOfSimetry.mjs';

describe('symmetric', () => {
    it('should return true for a symmetric array', () => {
        expect(isSymmetric([1, 2, 1])).to.be.true;
    });

    it('should return false for a non - symetric array', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it('should return false for a string, even if it reads the same both ways', () => {
        expect(isSymmetric('abba')).to.be.false;
    });

    it('should return true for an empty array', () => {
        expect(isSymmetric([])).to.be.true;
    });
});