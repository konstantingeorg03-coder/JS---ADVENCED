import { expect } from "chai";

import { lookupChar } from "./09. charLookup.mjs";

describe('lookupChar', () => {
    it('should return undefined for invalid first parameter - Number', () => {
        expect(lookupChar(5, 0)).to.be.undefined;
    });

    it('should return undefined for invalid index - String / Non - Integer', () => {
        expect(lookupChar('hello', '0')).to.be.undefined;
        expect(lookupChar('hello', 1.5)).to.be.undefined;
    });

    it('should return Incorrect index', () => {
        expect(lookupChar('hello', -1)).to.equal('Incorrect index');
        expect(lookupChar('hello', 5)).to.equal('Incorrect index');
        expect(lookupChar('hello', 10)).to.equal('Incorrect index');
    });

    it('should return symbol on the given index', () => {
        expect(lookupChar('hello', 0)).to.equal('h');
    });

    it('should return symbol on the given index - last symbol', () => {
        expect(lookupChar('hello', 4)).to.equal('o');
    });
});