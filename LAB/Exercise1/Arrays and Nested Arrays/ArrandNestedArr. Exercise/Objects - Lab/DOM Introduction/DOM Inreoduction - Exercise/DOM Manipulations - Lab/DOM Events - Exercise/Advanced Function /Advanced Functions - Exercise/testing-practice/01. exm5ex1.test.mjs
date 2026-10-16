import { expect } from 'chai';

import  weddingDay  from './01. exm5ex1.js';

describe('weddingDay', () => {
    describe('pickVenue', () => {
        it('should return valid output', () => {
            expect(weddingDay.pickVenue(149, 100, 'Varna')).to.equal('This venue does not meet your requirements!')
        });

        it('should return valid output', () => {
            expect(weddingDay.pickVenue(150, 121, 'Varna')).to.equal('This venue does not meet your requirements!')
        });

        it('should return valid output', () => {
            expect(weddingDay.pickVenue(150, 120, 'Varna')).to.equal('This venue meets the requirements, with capacity of 150 guests and 120$ cover.')
        });

        it('should return Error for invalid capacity', () => {
            expect(() => weddingDay.pickVenue('150', 100, 'Varna')).to.throw('Invalid Information!');
        });

        it('should return Error for invalid pricePerGuest', () => {
            expect(() => weddingDay.pickVenue(150, '100', 'Varna')).to.throw('Invalid Information!');
        });

        it('should return Error for invalid location', () => {
            expect(() => weddingDay.pickVenue(150, 100, 150)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid location', () => {
            expect(() => weddingDay.pickVenue(150, 100, '')).to.throw('Invalid Information!');
        });

        it('should return Error for invalid location', () => {
            expect(() => weddingDay.pickVenue(150, 100, 'Sofia')).to.throw('The location of this venue is not in the correct area!');
        });
    });

    describe('otherSpendings', () => {
        it('should return valid output', () => {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], false)).to.equal('You spend 2900$ for wedding decoration and photography!');
        });

        it('should return valid output', () => {
            expect(weddingDay.otherSpendings(['flowers', 'Fabric drapes and curtains'], ['pictures', 'video'], true)).to.equal('You spend 2465$ for wedding decoration and photography with 15% discount!');
        });

        it('should return valid output', () => {
            expect(weddingDay.otherSpendings(['flowers'], ['pictures'], false)).to.equal('You spend 1200$ for wedding decoration and photography!');
        });

        it('should return Error for invalid weddingDecoration', () => {
            expect(() => weddingDay.otherSpendings('flowers, pictures', ['pictures', 'video'], false)).to.throw(`Invalid Information!`);
        });

        it('should return Error for invalid photography', () => {
            expect(() => weddingDay.otherSpendings(['flowers, pictures'], 'pictures', false)).to.throw(`Invalid Information!`);
        });

        it('should return Error for invalid discount', () => {
            expect(() => weddingDay.otherSpendings(['flowers, pictures'], ['pictures', 'video'], 'yes')).to.throw(`Invalid Information!`);
        });
    });

    describe('tableDistribution', () => {
        it('should return valid output', () => {
            expect(weddingDay.tableDistribution(20, 5)).to.equal('There is only 4 people on every table, you can join some tables.');
        });

        it('should return valid output', () => {
            expect(weddingDay.tableDistribution(60, 10)).to.equal('You have 10 tables with 6 guests on table.');
        });

        it('should return valid output', () => {
            expect(weddingDay.tableDistribution(22, 4)).to.equal('You have 4 tables with 6 guests on table.');
        });

        it('should return Error for invalid guests', () => {
            expect(() => weddingDay.tableDistribution('154', 4)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid tables', () => {
            expect(() => weddingDay.tableDistribution(154, '4')).to.throw('Invalid Information!');
        });

        it('should return Error for invalid guests', () => {
            expect(() => weddingDay.tableDistribution(-1, 4)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid tables', () => {
            expect(() => weddingDay.tableDistribution(154, -5)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid guests', () => {
            expect(() => weddingDay.tableDistribution(0, 4)).to.throw('Invalid Information!');
        });

        it('should return Error for invalid tables', () => {
            expect(() => weddingDay.tableDistribution(154, 0)).to.throw('Invalid Information!');
        });
    });
});