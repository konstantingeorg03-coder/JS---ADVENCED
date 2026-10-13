import { expect } from 'chai';

import { streamingServiceSelector } from "./03. streamingServiceSelector.js";

describe('streamingServiceSelector', () => {
    describe('selectingContent', () => {
        it('returns correct message for valid input', () => {
            expect(streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Action')).to.equal('You can watch this Action Movie on Netflix. Enjoy your Action-filled experience!');
        });

        it('throws error for unsupported genre', () => {
            expect(() => streamingServiceSelector.selectingContent('Movie', 'Netflix', 'Cartoon')).to.throw('We currently support these genres: Action, Comedy, Drama, Thriller, Horror, Romance, Sci-Fi.');
        });

        it('throws error for unsupported type', () => {
            expect(() => streamingServiceSelector.selectingContent('Series', 'Netflix', 'Drama')).to.throw("We currently only support 'Movie' or 'TV Show' types.");
        });
    });

    describe('availablePlatforms', () => {
        it('returns just valid kanals', () => {
            expect(streamingServiceSelector.availablePlatforms(['Netflix', 'HBO', 'Disney+'], 1)).to.equal('Other available platforms are: Netflix, Disney+.');
        });

        it('should return Error for invalid type input', () => {
            expect(() => streamingServiceSelector.availablePlatforms('Netflix', 0)).to.throw('Invalid platform selection.');
        });

        it('should return Error for index out of Array', () => {
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix', 'HBO'], 2)).to.throw('Invalid platform selection.');
        });

        it('should return Error for invalid index - String', () => {
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix', 'HBO'], '1')).to.throw('Invalid platform selection.');
        });

        it('should return Error for negative number - index', () => {
            expect(() => streamingServiceSelector.availablePlatforms(['Netflix', 'HBO'], -1)).to.throw('Invalid platform selection.');
        });
    });

    describe('contentRating', () => {
        it('should return correct input for higher raiting', () => {
            expect(streamingServiceSelector.contentRating(120, 8)).to.equal('This content is highly rated (8/10) and has a runtime of 2.00 hours. Enjoy your watch!');
        });

        it('should return correct input for lower rating', () => {
            expect(streamingServiceSelector.contentRating(90, 5)).to.equal('This content has a lower rating (5/10) and runs for 1.50 hours. You might want to check reviews first.');
        });

        it('should return Error for invalid minutes', () => {
            expect(() => streamingServiceSelector.contentRating(0, 8)).to.throw('Invalid runtime or rating.');
        });

        it('should return Error for invalid rating', () => {
            expect(() => streamingServiceSelector.contentRating(120, 11)).to.throw('Invalid runtime or rating.');
        });
    });
});