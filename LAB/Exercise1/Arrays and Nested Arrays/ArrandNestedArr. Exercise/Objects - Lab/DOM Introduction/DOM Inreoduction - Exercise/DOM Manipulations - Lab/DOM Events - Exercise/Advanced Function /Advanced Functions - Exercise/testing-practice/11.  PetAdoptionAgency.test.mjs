import { expect } from "chai";

import { petAdoptionAgency } from './11. Pet Adoption Agency';

describe('petAdoptionAgency', () => {
    describe('isPetAvailable' , () => {
        it('should return correct output', () => {
            expect(petAdoptionAgency.isPetAvailable('dog', 5, true)).to.equal('Great! We have 5 vaccinated dog(s) available for adoption at the agency.');
        });

        it('should return Error for invalit pet - number', () => {
            expect(() => petAdoptionAgency.isPetAvailable(15, 8, true)).to.throw('Invalid input');
        });

        it('should return Error for invalid availableCount - String', () => {
            expect(() => petAdoptionAgency.isPetAvailable('cat', '9', true)).to.throw('Invalid input');
        });

        it('should return Error for invalid vaccinated - nonBoolean', () => {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 9, 'yes')).to.throw('Invalid input');
        });

        it('should return sorry message for 0 or less pets', () => {
            expect(petAdoptionAgency.isPetAvailable('fish', -4, true)).to.equal('Sorry, there are no fish(s) available for adoption at the agency.');
        });

        it('should return output for unvaccinated pets', () => {
            expect(petAdoptionAgency.isPetAvailable('fish', 4, false)).to.equal('Great! We have 4 fish(s) available for adoption, but they need vaccination.');
        });
    });

    describe('getRecommendedPets', () => {
        it('should return valid output', () => {
            expect(petAdoptionAgency.getRecommendedPets([{ name: 'Rex',   traits: 'calm' }, 
            { name: 'Tom',   traits: 'playful' },{ name: 'Bella', traits: 'calm' }], 'calm')).to.equal('Recommended pets with the desired traits (calm): Rex, Bella');
        });

        it('should return Error for invalid petList - nonArray', () => {
            expect(() => petAdoptionAgency.getRecommendedPets({name: 'Rex', traits: 'calm'})).to.throw('Invalid input');
        });

        it('should return Error for invalid desiredTraits - Number', () => {
            expect(() => petAdoptionAgency.getRecommendedPets([
        { name: 'Rex',   traits: 'calm' },
        { name: 'Tom',   traits: 'playful' },
        { name: 'Bella', traits: 'calm' }], 12)).to.throw('Invalid input')});

        it('should return output for non - pets', () => {
            expect(petAdoptionAgency.getRecommendedPets([], 'calm')).to.equal('Sorry, we currently have no recommended pets with the desired traits: calm.');
        });
    });

    describe('adoptPet', () => {
        it('should return correctly output for adopterName and pet', () => {
            expect(petAdoptionAgency.adoptPet('dog', 'Kosio')).to.equal('Congratulations, Kosio! You have adopted dog from the agency. Enjoy your time with your new furry friend!');
        });

        it('should return output for invalid pet - nonString', () => {
            expect(() => petAdoptionAgency.adoptPet('Kosio', 3)).to.throw('Invalid input');
        });

        it('should return output for invalid adopterName - nonString', () => {
            expect(() => petAdoptionAgency.adoptPet(10, 'dog')).to.throw('Invalid input');
        });
    });
});