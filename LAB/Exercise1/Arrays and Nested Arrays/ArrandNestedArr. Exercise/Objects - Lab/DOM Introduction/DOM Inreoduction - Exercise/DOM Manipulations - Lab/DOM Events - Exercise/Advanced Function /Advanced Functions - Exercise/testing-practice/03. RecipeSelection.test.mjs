import { expect } from "chai";
import { recipeSelection } from "./03. RecipeSelection";

describe('recipeSelection' , () => {
    describe('isTypeSuitable', () => {
        it('should return valid output', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        });

        it('should return Error for invalid type - Number', () => {
            expect(() => recipeSelection.isTypeSuitable(123, 'Vegeterian')).to.throw('Invalid input');
        });

        it('should return Error for invalid dietaryRestriction - Number', () => {
            expect(() => recipeSelection.isTypeSuitable('Meat', 156)).to.throw('Invalid input');
        });

        it('should return valid output', () => {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('should return valid output', () => {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it('should return valid output', () => {
            expect(recipeSelection.isTypeSuitable('Fruit', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
        });
    });

    describe('isItAffordable', () => {
        it('should return output for remainingBudget after bought', () => {
            expect(recipeSelection.isItAffordable(70, 150)).to.equal('Recipe ingredients bought. You have 80$ left');
        });

        it('should return Error for inivalid price - String', () => {
            expect(() => recipeSelection.isItAffordable('100', 99)).to.throw('Invalid input');
        });

        it('should return Error for inivalid budget - String', () => {
            expect(() => recipeSelection.isItAffordable(100, '99')).to.throw('Invalid input');
        });

        it('should return output for remainingBudget after bought', () => {
            expect(recipeSelection.isItAffordable(170, 160)).to.equal("You don't have enough budget to afford this recipe");
        });

        it('should return output for remainingBudget after bought', () => {
            expect(recipeSelection.isItAffordable(150, 150)).to.equal('Recipe ingredients bought. You have 0$ left');
        });
    });

    describe('getRecipesByCategory', () => {
        it('should return valid output', () => {
            expect(recipeSelection.getRecipesByCategory([{ title: 'Pancakes', category: 'Dessert' },
            { title: 'Salad', category: 'Healthy' }, { title: 'Cake', category: 'Dessert' }], 'Dessert')).to.deep.equal(['Pancakes', 'Cake']);
        });

        it('should return Error for invalid recipes - non Array', () => {
            expect(() => recipeSelection.getRecipesByCategory({ title: 'Pancakes', category: 'Dessert' },
            { title: 'Salad', category: 'Healthy' }, { title: 'Cake', category: 'Dessert' }, 'Dessert')).to.throw('Invalid input');
        });

        it('should return Error for invalid category - Number', () => {
            expect(() => recipeSelection.getRecipesByCategory([{ title: 'Pancakes', category: 'Dessert' },
            { title: 'Salad', category: 'Healthy' }, { title: 'Cake', category: 'Dessert' }], 123)).to.throw('Invalid input');
        });

        it('should return valid output', () => {
            expect(recipeSelection.getRecipesByCategory([{ title: 'Pancakes', category: 'Dessert' },
            { title: 'Salad', category: 'Healthy' }, { title: 'Cake', category: 'Dessert' }], 'Soup')).to.deep.equal([]);
        });
    });
});