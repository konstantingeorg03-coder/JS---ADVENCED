import { expect } from 'chai';

import { sum } from './05. sum.mjs';

describe('sum', () => {
    it('should return the sum of positive numbers', () => {
        const input = [1, 2, 3];

        const result = sum(input);

        expect(result).to.equal(6);
    });

    it('should return 0 for an empty array', () => {
        expect(sum([])).to.equal(0);
    });
});