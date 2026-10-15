import { expect } from 'chai';

import { onlineStore } from './03. onlineStore';

describe('onlineStore', () => {
    describe('isProductAvailable', () => {
        it('should return valid output for product', () => {
            expect(onlineStore.isProductAvailable('shoes', 3)).to.equal('Great! shoes is available for purchase.')
        });

        it('should return Error for invalid type of product - Number', () => {
            expect(() => onlineStore.isProductAvailable(123, 5)).to.throw('Invalid input.');
        });

        it('should return Error for invalid type of stockQuantity - String', () => {
            expect(() => onlineStore.isProductAvailable('T-shirt', '5')).to.throw('Invalid input.');
        });
        
        it('should return message for quantity under 0', () => {
            expect(onlineStore.isProductAvailable('T-shirt', -5)).to.equal('Sorry, T-shirt is currently out of stock.');
        });

        it('should return message for quantity is 0', () => {
            expect(onlineStore.isProductAvailable('T-shirt', 0)).to.equal('Sorry, T-shirt is currently out of stock.');
        });
    });

    describe('canAffordProduct', () => {
        it('should return valid output', () => {
            expect(onlineStore.canAffordProduct(120, 200)).to.equal('Product purchased. Your remaining balance is $80.');
        });

        it('should return Error for invalid type of productPrice - String', () => {
            expect(() => onlineStore.canAffordProduct('120', 300)).to.throw('Invalid input.');
        });

        it('should return Error for invalid type of accountBalance - String', () => {
            expect(() => onlineStore.canAffordProduct(120, '300')).to.throw('Invalid input.');
        });

        it('should return output for remainingBalance', () => {
            expect(onlineStore.canAffordProduct(120, 100)).to.equal("You don't have sufficient funds to buy this product.");
        });

        it('should return valid output', () => {
            expect(onlineStore.canAffordProduct(100, 100)).to.equal('Product purchased. Your remaining balance is $0.');
        });
    });

    describe('getRecommendedProducts', () => {
        it('should return valid output', () => {
            expect(onlineStore.getRecommendedProducts([{ name: 'Phone', category: 'Electronics' },
                { name: 'Laptop', category: 'Electronics' },
                { name: 'T-shirt', category: 'Clothing' }], 'Electronics')).to.equal('Recommended products in the Electronics category: Phone, Laptop');
        });

        it('should return Error for invalid type of productList - String', () => {
            expect(() => onlineStore.getRecommendedProducts('T-shirt, shoes', 'shoes')).to.throw('Invalid input.')
        });

        it('should return Error for invalid type of category - Number', () => {
            expect(() => onlineStore.getRecommendedProducts([{ name: 'Phone', category: 15 },
                { name: 20, category: 0 },
                { name: 6, category: 5 }], 5)).to.throw('Invalid input.')
        });

        it('should return valid output', () => {
            expect(onlineStore.getRecommendedProducts([], 'Toys')).to.equal('Sorry, we currently have no recommended products in the Toys category.');
        });

        it('should return output for non Category', () => {
            expect(onlineStore.getRecommendedProducts([{ name: 'Phone', category: 'Electronics' },
                { name: 'Laptop', category: 'Electronics' },
                { name: 'T-shirt', category: 'Clothing' }], 'Toys')).to.equal('Sorry, we currently have no recommended products in the Toys category.');
        });
    });
});