import { expect } from "chai";

import { isOddOrEven } from "./08. oddOrEven.mjs";

describe('isOddOrEven', () => {
    it('should return undefined for invalid Number', () => {
        expect(isOddOrEven(5)).to.be.undefined;
    });

    it('should return undefined for invalid arr', () => {
        expect(isOddOrEven(['a', 'b'])).to.be.undefined;
    });

    it('should return even because of even length', () => {
        expect(isOddOrEven('ab')).to.equal('even');
    });

    it('should return correctly with multiple strings', () => {
        expect(isOddOrEven('a')).to.equal('odd');
        expect(isOddOrEven('abcd')).to.equal('even');
        expect(isOddOrEven('hello')).to.equal('odd');
    });
});