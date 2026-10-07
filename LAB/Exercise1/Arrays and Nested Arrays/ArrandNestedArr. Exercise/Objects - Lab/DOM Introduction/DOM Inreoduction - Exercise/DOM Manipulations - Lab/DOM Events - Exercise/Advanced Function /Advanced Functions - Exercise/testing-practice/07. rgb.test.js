import { expect } from 'chai';

import { rgbToHexColor } from './07. rgbToHex.mjs';

describe('rgbToHexColor', () => {
    it('expect correctly css color - red', () => {
        expect(rgbToHexColor(255, 0, 0)).to.equal('#FF0000');
    });

    it('expect corretcly color - dark', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });

    it('expect correctly symbol - dark gray', () => {
        expect(rgbToHexColor(15, 15, 15)).to.equal('#0F0F0F');
    });

    it('should return undefined for value above 255', () => {
        expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
    });

    it('should return undefined for negative value', () => {
        expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
    });

    it('should return undefined for second value above 255', () => {
        expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
    });

    it('should return undefined for third value above 255', () => {
        expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
    });
});



