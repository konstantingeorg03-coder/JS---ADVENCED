import { expect } from 'chai';

import { artGallery } from "./01.exercise3Exam2.js"

describe('artGallery', () => {
    describe('addArtwork', () => {
        it('should return valid output for valid strings', () => {
            expect(artGallery.addArtwork('Sunflowers', '30 x 40', 'Van Gogh')).to.equal("Artwork added successfully: 'Sunflowers' by Van Gogh with dimensions 30 x 40.");
        });

        it('shoud retirn Error for non intervals', () => {
            expect(() => artGallery.addArtwork('Sunflowers', '30x40', 'Van Gogh')).to.throw('Invalid Dimensions!');
        });

        it('should return Error for input - no String', () => {
            expect(() => artGallery.addArtwork(123, '30 x 40', 741 )).to.throw('Invalid Information!');
        });

        it('should return Error for invalid artist', () => {
            expect(() => artGallery.addArtwork('Mona Lisa', '30 x 40', 'Da Vinci')).to.throw('This artist is not allowed in the gallery!')
        });
    });

    describe('calculateCosts', () => {
        it('should return valid input', () => {
            expect(artGallery.calculateCosts(100, 50, false)).to.equal('Exhibition and insurance costs are 150$.');
        });

        it('should return Error for invalid exhibition - String', () => {
            expect(() => artGallery.calculateCosts('100', 50, false)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid insuranceCosts - String', () => {
            expect(() => artGallery.calculateCosts(40, '100', false)).to.throw('Invalid Information!');
        });

        it('should return Error for sponsor is not boolean', () => {
            expect(() => artGallery.calculateCosts(40, 50, 'yes')).to.throw('Invalid Information!');
        });

        it('should return Error for exhibitionCosts is under 0', () => {
            expect(() => artGallery.calculateCosts(-40, 100, false)).to.throw('Invalid Information!');
        });

        it('should return Error for insuranceCosts is under 0', () => {
            expect(() => artGallery.calculateCosts(40, -100, false)).to.throw('Invalid Information!');
        });

        it('should return valid input', () => {
            expect(artGallery.calculateCosts(100, 50, true)).to.equal('Exhibition and insurance costs are 135$, reduced by 10% with the help of a donation from your sponsor.')
        });
    });

    describe('organizeExhibits', () => {
        it('should return valid input', () => {
            expect(artGallery.organizeExhibits(30, 15)).to.equal('There are only 2 artworks in each display space, you can add more artworks.');
        });

        it('should return Error for invalid artworksCount - String', () => {
            expect(() => artGallery.organizeExhibits('100', 20)).to.throw('Invalid Information')
        });

        it('should return Error for invalid displaySpacesCount - String', () => {
            expect(() => artGallery.organizeExhibits(50, '20')).to.throw('Invalid Information')
        });

        it('should return Error for invalid artworksCount - under 0', () => {
            expect(() => artGallery.organizeExhibits(-7, 20)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid displaySpacesCount - under 0', () => {
            expect(() => artGallery.organizeExhibits(50, -10)).to.throw('Invalid Information!');
        });

        it('should return valid input', () => {
            expect(artGallery.organizeExhibits(70, 7)).to.equal('You have 7 display spaces with 10 artworks in each space.');
        });
    });
});