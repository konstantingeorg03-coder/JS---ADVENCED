import { expect } from 'chai';

import  lottery  from './12. finalEx.js';

describe('lottery', () => {
    describe('buyLotteryTicket', () => {
        it('should return valid output', () => {
            expect(lottery.buyLotteryTicket(2, 5, true)).to.equal('You bought 5 tickets for 10$.');
        });

        it('should return valid output', () => {
            expect(lottery.buyLotteryTicket(10, 1, true)).to.equal('You bought 1 tickets for 10$.');
        });

        it('should return valid output', () => {
            expect(lottery.buyLotteryTicket(2.5, 4, true)).to.equal('You bought 4 tickets for 10$.');
        });

        it('should return valid output', () => {
            expect(lottery.buyLotteryTicket(0.5, 2, true)).to.equal('You bought 2 tickets for 1$.');
        });

        it('should return Error for invalid ticketPrice = String', () => {
            expect(() => lottery.buyLotteryTicket('5', 2, true)).to.throw('Invalid input!');
        });

        it('should return Error for invalid ticketCount = String', () => {
            expect(() => lottery.buyLotteryTicket(5, '2', true)).to.throw('Invalid input!');
        });

        it('should return Error for invalid buy = non Boolean', () => {
            expect(() => lottery.buyLotteryTicket(5, 2, 5)).to.throw('Invalid input!');
        });

        it('should return valid output', () => {
            expect(() => lottery.buyLotteryTicket(5, 2, false)).to.throw('Unable to buy lottery ticket!');
        });

        it('should return Error for invalid ticketPrice = 0', () => {
            expect(() => lottery.buyLotteryTicket(0, 2, true)).to.throw('Invalid input!');
        });

        it('should return Error for invalid ticketPrice = under 0', () => {
            expect(() => lottery.buyLotteryTicket(-5, 2, true)).to.throw('Invalid input!');
        });

        it('should return Error for invalid ticketCount =  0', () => {
            expect(() => lottery.buyLotteryTicket(5, 0, true)).to.throw('Invalid input!');
        });

        it('should return Error for invalid ticketCount - under 0', () => {
            expect(() => lottery.buyLotteryTicket(5, -9, true)).to.throw('Invalid input!');
        });
    });

    describe('checkTicket', () => {
        it('should return valid output', () => {
            expect(lottery.checkTicket([1, 2, 3, 7, 8, 9], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
        });

        it('should return valid output', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 9], [1, 2, 3, 4, 5, 6])).to.equal('Congratulations you win, check your reward!');
        });

        it('should return Error for invalid type Of ticketNumbers', () => {
            expect(() => lottery.checkTicket('123456', [1, 2, 3, 4, 5, 6])).to.throw('Invalid input');
        });

        it('should return Error for invalid type Of luckyNumbers', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], '123456')).to.throw('Invalid input');
        });

        it('should return Error for invalid ticketNumbers - under 6 nums', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input');
        });

        it('should return Error for invalid ticketNumbers more than 6 nums', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6, 7], [1, 2, 3, 4, 5, 6])).to.throw('Invalid input');
        });

        it('should return Error for invalid luckyNumbers under 6 nums', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5])).to.throw('Invalid input');
        });

        it('should return Error for invalid luckyNumbers more than 6 nums', () => {
            expect(() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6, 7])).to.throw('Invalid input');
        });

        it('should return jackpot for 6 matches', () => {
            expect(lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6])).to.equal('You win the JACKPOT!!!');
        });

        it('should return undefined for less than 3 matches', () => {
            expect(lottery.checkTicket([1, 2, 7, 8, 9, 10], [1, 2, 3, 4, 5, 6])).to.be.undefined;
        });

        it('should count duplicate numbers only once', () => {
            expect(lottery.checkTicket([1, 1, 1, 7, 8, 9], [1, 2, 3, 4, 5, 6])).to.be.undefined;
        });
    });

    describe('secondChance', () => {
        it('should return vali output for find ticket', () => {
            expect(lottery.secondChance(2, [1, 2, 3])).to.equal('You win our second chance prize!');
        });

        it('should return vali output for no find ticket', () => {
            expect(lottery.secondChance(2, [1, 5, 3])).to.equal("Sorry, your ticket didn't win!");
        });

        it('should return vali output for no find ticket', () => {
            expect(lottery.secondChance(2, [])).to.equal("Sorry, your ticket didn't win!");
        });

        it('should return vali output for no find ticket', () => {
            expect(lottery.secondChance(2, ['2'])).to.equal("Sorry, your ticket didn't win!");
        });

        it('should return Error for invalid ticketID - String', () => {
            expect(() => lottery.secondChance('2', [1, 2, 6])).to.throw('Invalid input!');
        });

        it('should return Error for invalid ticketID - null', () => {
            expect(() => lottery.secondChance(null, [1, 2, 6])).to.throw('Invalid input!');
        });

        it('should return Error for invalid secondChanceWinningIDs - String', () => {
            expect(() => lottery.secondChance(2, '6')).to.throw('Invalid input!');
        });

        it('should return Error for invalid secondChanceWinningIDs - String', () => {
            expect(() => lottery.secondChance(2, {})).to.throw('Invalid input!');
        });
    });
});